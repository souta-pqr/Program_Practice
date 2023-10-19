from pykakasi import kakasi

def convert_to_katakana(text):
    kakasi_instance = kakasi()
    kakasi_instance.setMode('H', 'a')  # Hiragana to ascii
    kakasi_instance.setMode('K', 'a')  # Katakana to ascii
    kakasi_instance.setMode('J', 'a')  # Japanese(kanji) to ascii
    conv = kakasi_instance.getConverter()

    return conv.do(text)

text1 = "(R 沢村)さん"
text2 = "(R サワムラサン"

# Convert text1 to katakana
text1_katakana = convert_to_katakana(text1)

# Find the position of ')' in text1_katakana
position = text1_katakana.index(')')

# Insert ')' into text2 at the same position
text2 = text2[:position+1] + ')' + text2[position+1:]

print(text2)
