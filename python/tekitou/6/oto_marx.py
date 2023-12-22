# ライブラリのインポート
import pyttsx3

# エンジンの初期化
engine = pyttsx3.init()

# テキストの設定
text = "こんにちは、世界"

# テキストを音声に変換して再生
engine.say(text)
engine.runAndWait()
