from pykakasi import kakasi
import re

def convert_to_katakana(text):
    kakasi_instance = kakasi()
    kakasi_instance.setMode('H', 'K')  # Hiragana to Katakana
    kakasi_instance.setMode('J', 'K')  # Japanese(kanji) to Katakana
    conv = kakasi_instance.getConverter()

    return conv.do(text)

def process_text(text):
    # テキストから括弧内の文字列を抽出
    match = re.search(r'\((.*?)\)', text)
    if match:
        # 括弧内の文字列をカタカナに変換
        katakana = convert_to_katakana(match.group(1))
        # 元のテキストで括弧内の文字列をカタカナに置き換え
        text = text.replace(match.group(1), katakana)
    return text

text1 = "(R 沢村)さん"
text2 = process_text(text1)

print(text2)