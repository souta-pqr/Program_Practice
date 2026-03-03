#!/usr/bin/env python3
"""Moonshine Voice vs Whisper - STT 性能比較 (Gradio UI)

WSL / Ubuntu でブラウザから音声を入力して比較します。

使い方:
  uv run compare_stt.py
  → ブラウザで http://localhost:7860 を開く

注意:
  - 初回実行はモデルのダウンロード (数百 MB) があるため時間がかかります
  - モデルは一度ロードするとセッション中はキャッシュされます
"""

# /// script
# requires-python = ">=3.10"
# dependencies = [
#   "useful-moonshine-onnx",
#   "faster-whisper",
#   "jiwer",
#   "soundfile",
#   "numpy",
#   "scipy",
#   "gradio>=4.0",
#   "pandas",
# ]
# ///

import time
from math import gcd

import gradio as gr
import numpy as np
import pandas as pd
from scipy.signal import resample_poly

SAMPLE_RATE = 16000

# Moonshine: 初回呼び出し追跡（transcribe() が内部でモデルをキャッシュする）
_moonshine_called: set = set()
# Whisper: モデルキャッシュ
_whisper_cache: dict = {}

# ---------------------------------------------------------------------------
# Moonshine モデルがサポートする言語の対応表
# ---------------------------------------------------------------------------
MOONSHINE_LANG_SUPPORT: dict[str, set[str]] = {
    "moonshine/tiny":    {"en"},
    "moonshine/base":    {"en"},
    "moonshine/tiny-ja": {"ja"},
    "moonshine/tiny-ko": {"ko"},
}


def moonshine_supports(model_name: str, lang: str) -> bool:
    return lang in MOONSHINE_LANG_SUPPORT.get(model_name, {"en"})


# ---------------------------------------------------------------------------
# 音声前処理
# ---------------------------------------------------------------------------

def preprocess_audio(audio_tuple: tuple) -> np.ndarray:
    """Gradio の音声タプル (sample_rate, array) を 16kHz mono float32 に変換"""
    sr, audio = audio_tuple

    # dtype → float32 正規化
    if audio.dtype == np.int16:
        audio = audio.astype(np.float32) / 32768.0
    elif audio.dtype == np.int32:
        audio = audio.astype(np.float32) / 2147483648.0
    else:
        audio = audio.astype(np.float32)

    # ステレオ → モノラル
    if audio.ndim == 2:
        audio = audio.mean(axis=1)

    # リサンプリング
    if int(sr) != SAMPLE_RATE:
        g = gcd(int(sr), SAMPLE_RATE)
        audio = resample_poly(audio, SAMPLE_RATE // g, int(sr) // g).astype(np.float32)

    return audio


# ---------------------------------------------------------------------------
# モデルロード（キャッシュ付き）
# ---------------------------------------------------------------------------

def get_whisper(model_size: str):
    if model_size not in _whisper_cache:
        from faster_whisper import WhisperModel
        _whisper_cache[model_size] = WhisperModel(model_size, device="cpu", compute_type="int8")
    return _whisper_cache[model_size]


# ---------------------------------------------------------------------------
# 推論 & 比較
# ---------------------------------------------------------------------------

def run_comparison(
    audio_input,
    moonshine_model_name: str,
    whisper_model_size: str,
    language: str,
    reference_text: str,
    skip_moonshine: bool,
    skip_whisper: bool,
) -> tuple[pd.DataFrame, str]:

    if audio_input is None:
        return pd.DataFrame(), "⚠️ 音声を入力してください"

    audio = preprocess_audio(audio_input)
    audio_duration = len(audio) / SAMPLE_RATE

    if audio_duration < 1.0:
        return pd.DataFrame(), "⚠️ 音声が短すぎます（1 秒以上録音してください）"

    results: dict[str, dict] = {}
    warnings: list[str] = []

    # ---- Moonshine ----
    if not skip_moonshine:
        import moonshine_onnx as _moon
        label = f"Moonshine ({moonshine_model_name.split('/')[-1]})"
        is_first = moonshine_model_name not in _moonshine_called

        # モデルと言語の不一致チェック
        if not moonshine_supports(moonshine_model_name, language):
            supported = sorted(MOONSHINE_LANG_SUPPORT.get(moonshine_model_name, {"en"}))
            warnings.append(
                f"⚠️ `{moonshine_model_name}` は **{', '.join(supported)}** 専用です。"
                f"`{language}` 音声では正確に認識できません。"
                f"日本語なら `moonshine/tiny-ja` をお使いください。"
            )

        try:
            t = time.perf_counter()
            text_list = _moon.transcribe(audio, moonshine_model_name)
            elapsed = time.perf_counter() - t
            _moonshine_called.add(moonshine_model_name)

            results[label] = {
                "text": text_list[0].strip(),
                "load_time": elapsed if is_first else 0.0,
                "infer_time": elapsed if not is_first else 0.0,
                "rtf": elapsed / audio_duration,
                "first_call": is_first,
            }
        except Exception as e:
            results[label] = {"error": str(e)}

    # ---- Whisper ----
    if not skip_whisper:
        label = f"Whisper ({whisper_model_size})"
        try:
            t0 = time.perf_counter()
            model = get_whisper(whisper_model_size)
            load_time = time.perf_counter() - t0

            t1 = time.perf_counter()
            segments, _ = model.transcribe(audio, language=language)
            text = " ".join(seg.text for seg in segments).strip()
            infer_time = time.perf_counter() - t1

            results[label] = {
                "text": text,
                "load_time": load_time,
                "infer_time": infer_time,
                "rtf": infer_time / audio_duration,
            }
        except Exception as e:
            results[label] = {"error": str(e)}

    # ---- 速度テーブル ----
    rows = []
    for name, r in results.items():
        if "error" in r:
            rows.append({
                "モデル": name,
                "文字起こし": f"ERROR: {r['error']}",
                "ロード (s)": "-",
                "推論 (s)": "-",
                "RTF ↓": "-",
            })
        else:
            load_str  = f"{r['load_time']:.3f}" + (" ※初回" if r.get("first_call") else "")
            infer_str = f"{r['infer_time']:.3f}" if not r.get("first_call") else "(初回込)"
            rows.append({
                "モデル": name,
                "文字起こし": r["text"] or "(空)",
                "ロード (s)": load_str,
                "推論 (s)": infer_str,
                "RTF ↓": f"{r['rtf']:.3f}",
            })

    df = pd.DataFrame(rows) if rows else pd.DataFrame()

    # ---- 補足 & 精度 ----
    lines: list[str] = []

    if warnings:
        lines += [w for w in warnings] + [""]

    lines += [
        f"**音声長**: {audio_duration:.2f} 秒",
        "",
        "**RTF** (Real Time Factor) = 推論時間 ÷ 音声長",
        "RTF < 1.0 → リアルタイムより速い　|　RTF が小さいほど高速",
    ]

    if reference_text.strip():
        from jiwer import wer, cer
        lines += ["", "---", "### 精度比較 (WER / CER)", ""]
        for name, r in results.items():
            if "error" not in r and r.get("text"):
                w = wer(reference_text.lower(), r["text"].lower())
                c = cer(reference_text.lower(), r["text"].lower())
                lines.append(f"- **{name}**: WER = {w:.1%},  CER = {c:.1%}")
        lines += ["", "_WER: 単語誤り率 / CER: 文字誤り率 — 小さいほど高精度_"]

    return df, "\n".join(lines)


# ---------------------------------------------------------------------------
# 言語変更時の警告バナー更新
# ---------------------------------------------------------------------------

def update_lang_warning(moon_model: str, lang: str) -> str:
    if moonshine_supports(moon_model, lang):
        return ""
    supported = sorted(MOONSHINE_LANG_SUPPORT.get(moon_model, {"en"}))
    # 日本語の場合は推奨モデルをガイド
    suggestion = ""
    for m, langs in MOONSHINE_LANG_SUPPORT.items():
        if lang in langs:
            suggestion = f"　→ `{m}` をお使いください"
            break
    return (
        f"> ⚠️ **モデルと言語が不一致**: `{moon_model}` は **{', '.join(supported)}** 専用です。"
        f"`{lang}` 音声には対応していません。{suggestion}"
    )


# ---------------------------------------------------------------------------
# Gradio UI
# ---------------------------------------------------------------------------

with gr.Blocks(title="Moonshine vs Whisper", theme=gr.themes.Soft()) as demo:

    gr.Markdown("# 🎙️ Moonshine Voice vs Whisper — STT 性能比較")
    gr.Markdown(
        "初回実行はモデルのダウンロードで数分かかります。2 回目以降はキャッシュされます。"
    )

    with gr.Row():

        # ---- 左: 入力設定 ----
        with gr.Column(scale=1, min_width=320):

            audio_input = gr.Audio(
                sources=["microphone", "upload"],
                type="numpy",
                label="音声入力（推奨: 10〜20 秒）",
            )

            with gr.Row():
                moonshine_model = gr.Dropdown(
                    choices=[
                        ("tiny    (英語)",   "moonshine/tiny"),
                        ("base   (英語)",    "moonshine/base"),
                        ("tiny-ja (日本語)", "moonshine/tiny-ja"),
                        ("tiny-ko (韓国語)", "moonshine/tiny-ko"),
                    ],
                    value="moonshine/tiny",
                    label="Moonshine モデル",
                )
                whisper_model = gr.Dropdown(
                    choices=["tiny", "base", "small", "medium"],
                    value="tiny",
                    label="Whisper モデル",
                )

            language = gr.Dropdown(
                choices=[
                    ("en — English",  "en"),
                    ("ja — 日本語",    "ja"),
                    ("zh — 中文",      "zh"),
                    ("ko — 한국어",    "ko"),
                    ("fr — Français", "fr"),
                    ("de — Deutsch",  "de"),
                    ("es — Español",  "es"),
                ],
                value="en",
                label="言語（Whisper 用 / Moonshine モデル選択の目安）",
            )

            # モデル・言語の不一致をリアルタイム表示
            lang_warning = gr.Markdown(value="")

            reference = gr.Textbox(
                label="正解テキスト（WER/CER 計算用・任意）",
                placeholder="the quick brown fox jumps over the lazy dog",
                lines=2,
            )

            with gr.Row():
                skip_moon = gr.Checkbox(label="Moonshine をスキップ", value=False)
                skip_wsp  = gr.Checkbox(label="Whisper をスキップ",   value=False)

            run_btn = gr.Button("▶  比較実行", variant="primary", size="lg")

        # ---- 右: 結果 ----
        with gr.Column(scale=2):
            results_table = gr.Dataframe(
                label="速度比較",
                headers=["モデル", "文字起こし", "ロード (s)", "推論 (s)", "RTF ↓"],
                interactive=False,
                wrap=True,
            )
            info_md = gr.Markdown()

    # 言語 or Moonshine モデルが変わるたびに警告バナーを更新
    for trigger in (language, moonshine_model):
        trigger.change(
            fn=update_lang_warning,
            inputs=[moonshine_model, language],
            outputs=[lang_warning],
        )

    run_btn.click(
        fn=run_comparison,
        inputs=[
            audio_input, moonshine_model, whisper_model,
            language, reference, skip_moon, skip_wsp,
        ],
        outputs=[results_table, info_md],
    )


if __name__ == "__main__":
    demo.launch(server_name="0.0.0.0", server_port=7860)
