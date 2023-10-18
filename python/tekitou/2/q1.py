from pykakasi import kakasi

def convert_to_katakana(text):
    kakasi_instance = kakasi()
    kakasi_instance.setMode('H', 'a')  # Hiragana to ascii
    kakasi_instance.setMode('K', 'a')  # Katakana to ascii
    kakasi_instance.setMode('J', 'a')  # Japanese(kanji) to ascii
    conv = kakasi_instance.getConverter()

    return conv.do(text)

text1 = "沢村さん"
text2 = "サワムラサン"

# Convert to katakana
text1_katakana = convert_to_katakana(text1)
text2_katakana = convert_to_katakana(text2)

# Check if they are the same
if text1_katakana == text2_katakana:
    print("They are the same.")
else:
    print("They are different.")

# Count the number of characters in the converted text1
print(f"The number of characters in the converted text1: {len(text1_katakana)}")

# Find the position of 'ラ' in the converted text1
position_ra = text1_katakana.find('ラ')
if position_ra != -1:
    print(f"The position of 'ラ' in the converted text1: {position_ra}")
else:
    print("'ラ' is not found in the converted text1.")
