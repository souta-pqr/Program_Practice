import stringprep

def convert_to_lowercase():
   text = "Hello WORLD"
   converted = ''.join(stringprep.map_table_b2(char) for char in text)
   print(f"元の文字列: {text}")
   print(f"変換後: {converted}")

convert_to_lowercase()
# 元の文字列: Hello WORLD
# 変換後: hello world

# 基本的な使用例
def check_nonascii_spaces():
   # 通常の空白と全角空白を含むテキスト
   texts = ["Hello World", "Hello　World"]  # 2番目は全角空白を使用
   for text in texts:
       has_nonascii_space = any(stringprep.in_table_c12(char) for char in text)
       print(f"'{text}' は非ASCII空白を{'含みます' if has_nonascii_space else '含みません'}")

check_nonascii_spaces()
# 'Hello World' は非ASCII空白を含みません
# 'Hello　World' は非ASCII空白を含みます
