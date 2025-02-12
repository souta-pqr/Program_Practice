import re

text = "The price is 1000 dollars and 50 cents"

# 文字列から数値のみを抽出
result = re.findall(r'\d+', text)

print(result) # ['1000', '50']