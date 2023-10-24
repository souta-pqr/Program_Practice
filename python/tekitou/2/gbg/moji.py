from pykakasi import kakasi

def convert_to_katakana(text):
    kakasi_instance = kakasi()
    kakasi_instance.setMode('H', 'K')  # Hiragana to ascii
    kakasi_instance.setMode('K', 'K')  # Katakana to ascii
    kakasi_instance.setMode('J', 'K')  # Japanese(kanji) to ascii
    conv = kakasi_instance.getConverter()

    return conv.do(text)

text1 = "(U 走)ると"
text2 = "(U ハ)シルト"

# Convert text1 to katakana
text1_katakana = convert_to_katakana(text1)

if text1_katakana == text2:
    print("text1 and text2 are the same.")
else:
    print("text1 and text2 are not the same.")

print(text1_katakana)
