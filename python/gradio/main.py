import gradio as gr
from transformers import pipeline, AutoModelForCausalLM, AutoTokenizer
import torch
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance
import numpy as np
import cv2
import json
from datetime import datetime

# GPUが利用可能かチェック
device = 0 if torch.cuda.is_available() else -1
print(f"🚀 Using device: {'GPU' if device == 0 else 'CPU'}")

# 最新のAIモデルをロード
print("🔄 Loading AI models...")

# 1. 物体検出モデル（DETR - 最新のTransformerベース検出器）
try:
    object_detector = pipeline(
        "object-detection",
        model="facebook/detr-resnet-50",
        device=device
    )
    print("✅ Object detection model loaded (DETR)")
except Exception as e:
    print(f"⚠️ Object detection model loading failed: {e}")
    object_detector = None

# 2. 画像分類モデル
try:
    image_classifier = pipeline(
        "image-classification",
        model="google/vit-base-patch16-224",
        device=device
    )
    print("✅ Image classification model loaded (ViT)")
except Exception as e:
    print(f"⚠️ Image classifier loading failed: {e}")
    image_classifier = None

# 3. ゼロショット分類（テキストと画像の関係性を理解）
try:
    zero_shot_classifier = pipeline(
        "zero-shot-classification",
        model="facebook/bart-large-mnli",
        device=device
    )
    print("✅ Zero-shot classifier loaded")
except Exception as e:
    print(f"⚠️ Zero-shot classifier loading failed: {e}")
    zero_shot_classifier = None

# ===== 物体検出関連の関数 =====
def detect_objects(image, confidence_threshold):
    """画像から物体を検出してバウンディングボックスを描画"""
    if object_detector is None:
        return image, "⚠️ 物体検出モデルが利用できません"
    
    if image is None:
        return None, "画像をアップロードしてください"
    
    try:
        # 物体検出を実行
        results = object_detector(image, threshold=confidence_threshold)
        
        # 画像をコピーして描画
        img_with_boxes = image.copy()
        draw = ImageDraw.Draw(img_with_boxes)
        
        # 検出結果のリスト
        detections = []
        
        # カラーパレット
        colors = [
            (255, 0, 0), (0, 255, 0), (0, 0, 255),
            (255, 255, 0), (255, 0, 255), (0, 255, 255)
        ]
        
        for idx, detection in enumerate(results):
            box = detection['box']
            label = detection['label']
            score = detection['score']
            
            # バウンディングボックスを描画
            x1, y1 = box['xmin'], box['ymin']
            x2, y2 = box['xmax'], box['ymax']
            
            color = colors[idx % len(colors)]
            
            # ボックスを描画
            draw.rectangle([x1, y1, x2, y2], outline=color, width=3)
            
            # ラベルを描画
            text = f"{label}: {score:.2f}"
            draw.text((x1, y1 - 15), text, fill=color)
            
            detections.append(f"🎯 {label} (信頼度: {score:.2%})")
        
        # 検出結果のテキスト
        if detections:
            result_text = f"✅ {len(detections)}個の物体を検出しました:\n\n" + "\n".join(detections)
        else:
            result_text = "⚠️ 物体が検出されませんでした。信頼度の閾値を下げてみてください。"
        
        return img_with_boxes, result_text
        
    except Exception as e:
        return image, f"⚠️ エラー: {str(e)}"

def classify_image(image, top_k):
    """画像を分類して上位K個のカテゴリを返す"""
    if image_classifier is None:
        return "⚠️ 画像分類モデルが利用できません"
    
    if image is None:
        return "画像をアップロードしてください"
    
    try:
        # 画像分類を実行
        results = image_classifier(image, top_k=top_k)
        
        # 結果をフォーマット
        output = "🏷️ **画像分類結果**\n\n"
        for idx, result in enumerate(results, 1):
            label = result['label']
            score = result['score']
            bar = "█" * int(score * 20)
            output += f"{idx}. **{label}**\n"
            output += f"   {bar} {score:.2%}\n\n"
        
        return output
        
    except Exception as e:
        return f"⚠️ エラー: {str(e)}"

def custom_classify(image, custom_labels):
    """ユーザー定義のラベルで画像を分類（ゼロショット）"""
    if zero_shot_classifier is None:
        return "⚠️ ゼロショット分類モデルが利用できません"
    
    if image is None:
        return "画像をアップロードしてください"
    
    if not custom_labels:
        return "⚠️ ラベルを入力してください（カンマ区切り）"
    
    try:
        # ラベルを分割
        labels = [label.strip() for label in custom_labels.split(",")]
        
        # 画像の説明を生成（簡易版）
        if image_classifier:
            top_result = image_classifier(image, top_k=1)[0]
            image_description = f"An image containing {top_result['label']}"
        else:
            image_description = "An image"
        
        # ゼロショット分類
        results = zero_shot_classifier(image_description, labels)
        
        # 結果をフォーマット
        output = "🎯 **カスタム分類結果**\n\n"
        for label, score in zip(results['labels'], results['scores']):
            bar = "█" * int(score * 20)
            output += f"**{label}**\n"
            output += f"{bar} {score:.2%}\n\n"
        
        return output
        
    except Exception as e:
        return f"⚠️ エラー: {str(e)}"

def apply_ai_filter(image, filter_type, intensity):
    """AIスタイルのフィルターを画像に適用"""
    if image is None:
        return None
    
    try:
        img = image.copy()
        
        if filter_type == "エッジ検出":
            # OpenCVでエッジ検出
            img_array = np.array(img)
            gray = cv2.cvtColor(img_array, cv2.COLOR_RGB2GRAY)
            edges = cv2.Canny(gray, 50 * intensity, 150 * intensity)
            edges_colored = cv2.cvtColor(edges, cv2.COLOR_GRAY2RGB)
            img = Image.fromarray(edges_colored)
            
        elif filter_type == "スタイライズ":
            # 輪郭強調
            img_array = np.array(img)
            stylized = cv2.stylization(img_array, sigma_s=60, sigma_r=0.07 * intensity)
            img = Image.fromarray(stylized)
            
        elif filter_type == "カートゥーン":
            # カートゥーン効果
            img_array = np.array(img)
            gray = cv2.cvtColor(img_array, cv2.COLOR_RGB2GRAY)
            gray = cv2.medianBlur(gray, 5)
            edges = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_MEAN_C, 
                                         cv2.THRESH_BINARY, 9, 9)
            color = cv2.bilateralFilter(img_array, 9, 250, 250)
            cartoon = cv2.bitwise_and(color, color, mask=edges)
            img = Image.fromarray(cartoon)
            
        elif filter_type == "ネオン":
            # ネオン効果
            enhancer = ImageEnhance.Contrast(img)
            img = enhancer.enhance(2.0 * intensity)
            enhancer = ImageEnhance.Color(img)
            img = enhancer.enhance(2.0 * intensity)
            
        elif filter_type == "サーマル":
            # サーマルビジョン風
            img_array = np.array(img)
            gray = cv2.cvtColor(img_array, cv2.COLOR_RGB2GRAY)
            thermal = cv2.applyColorMap(gray, cv2.COLORMAP_JET)
            img = Image.fromarray(cv2.cvtColor(thermal, cv2.COLOR_BGR2RGB))
        
        return img
        
    except Exception as e:
        print(f"Filter error: {e}")
        return image

def generate_analysis_report(image, detections, classifications):
    """包括的な分析レポートを生成"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    report = f"""
📊 **AI画像分析レポート**
━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ 分析時刻: {timestamp}
━━━━━━━━━━━━━━━━━━━━━━━━━━━

### � 物体検出結果
{detections}

### �️ 画像分類
{classifications}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 Powered by Transformer AI Models
- DETR (DEtection TRansformer)
- Vision Transformer (ViT)
- BART Zero-Shot Classifier
━━━━━━━━━━━━━━━━━━━━━━━━━━━
    """
    
    return report

# Gradio UI構築
with gr.Blocks(theme=gr.themes.Soft(), title="🔍 AI Vision Lab") as demo:
    
    gr.Markdown("""
    # 🔍 AI Vision Lab - 最先端コンピュータビジョン体験
    
    **最新のTransformerベースAIで画像を解析！**
    - 🎯 **DETR** - Facebook製の最新物体検出AI
    - 👁️ **Vision Transformer** - Google製の画像分類AI
    - 🎨 **AI Filters** - リアルタイム画像処理
    - 🧠 **Zero-Shot Classification** - カスタムラベルで分類
    
    画像をアップロードして、AIの力を体験しよう！✨
    """)
    
    with gr.Row():
        with gr.Column(scale=1):
            gr.Markdown("### 🎛️ コントロールパネル")
            
            text_prompt = gr.Textbox(
                label="💬 創作プロンプト",
                placeholder="例: 未来都市の夜景、ロボットと人間の共存、量子コンピューターの夢...",
                lines=3,
                value="人工知能が創造性を持つ未来"
            )
            
            with gr.Row():
                image_style = gr.Radio(
                    choices=["抽象", "幾何学", "フラクタル風", "グリッチ"],
                    value="フラクタル風",
                    label="🎨 ビジュアルスタイル"
                )
                
                color_scheme = gr.Radio(
                    choices=["サイバーパンク", "ネオン", "パステル", "ダーク", "ビビッド"],
                    value="ネオン",
                    label="🌈 カラーパレット"
                )
            
            text_temp = gr.Slider(
                minimum=0.1,
                maximum=2.0,
                value=0.8,
                step=0.1,
                label="�️ 創造性温度",
                info="高いほどランダム・創造的"
            )
            
            text_length = gr.Slider(
                minimum=50,
                maximum=200,
                value=100,
                step=10,
                label="📏 テキスト長",
                info="生成するテキストの最大長"
            )
            
            generate_btn = gr.Button(
                "🚀 AI創作を開始",
                variant="primary",
                size="lg"
            )
            
            gr.Markdown("""
            ---
            ### 💡 ヒント
            - **創造性温度**を上げると予測不可能な結果に
            - **グリッチ**スタイルでサイバーパンク感を
            - 抽象的なプロンプトほど面白い結果に！
            """)
    
        with gr.Column(scale=2):
            gr.Markdown("### 🎭 AI生成結果")
            
            with gr.Tab("📝 生成テキスト"):
                text_output = gr.Textbox(
                    label="AIが生成したテキスト",
                    lines=10,
                    max_lines=15
                )
                
                sentiment_output = gr.Textbox(
                    label="🧠 AI感情分析",
                    lines=2
                )
            
            with gr.Tab("🎨 生成アート"):
                image_output = gr.Image(
                    label="AIが生成したビジュアルアート",
                    type="pil"
                )
            
            with gr.Tab("📊 創作レポート"):
                report_output = gr.Textbox(
                    label="統合レポート",
                    lines=12
                )
    


if __name__ == "__main__":
    demo.launch(share=False, server_name="0.0.0.0")
