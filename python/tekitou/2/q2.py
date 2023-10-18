from pykakasi import kakasi

def convert_to_katakana(text):
    kakasi_instance = kakasi()
    kakasi_instance.setMode('H', 'K')  # Hiragana to Katakana
    kakasi_instance.setMode('J', 'K')  # Japanese(kanji) to Katakana
    conv = kakasi_instance.getConverter()

    return conv.do(text)

text1 = "(R 沢村)さん"
text2 = "(R " + convert_to_katakana("沢村") + ")さん"

print(text2)