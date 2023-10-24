import re

text = '''
(L (D ム)) & (L (D ム))
(L (F ソ)) & (L (G ソ))
'''

# 正規表現を使用して "(L (D ム))" のようなパターンを "(D ム)" に変換
cleaned_text = re.sub(r'\(L \((D [^\)]+)\)\)', r'\1', text)
cleaned_text = re.sub(r'\(L \((F [^\)]+)\)\)', r'\1', cleaned_text)

print(cleaned_text)
