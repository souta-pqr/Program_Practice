from pykakasi import kakasi

def convert_to_katakana(text):
    kakasi_instance = kakasi()
    kakasi_instance.setMode('H', 'a')  # Hiragana to ascii
    kakasi_instance.setMode('K', 'a')  # Katakana to ascii
    kakasi_instance.setMode('J', 'a')  # Japanese(kanji) to ascii
    conv = kakasi_instance.getConverter()

    return conv.do(text)

text1 = "年中"
text2 = "ネンジ"

# Convert to katakana
text1_katakana = convert_to_katakana(text1)
text2_katakana = convert_to_katakana(text2)

# text1_katakanaの文字数を数える
length_text1_katakana = len(text1_katakana)
print("text1_katakanaの文字数は", length_text1_katakana, "です。")

# Check if they are the same
if text1_katakana == text2_katakana:
    print("They are the same.")
else:
    print("They are different.")
