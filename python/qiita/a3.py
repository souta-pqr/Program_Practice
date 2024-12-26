import difflib

# 2つの文字列
text1 = "Hello, world!"
text2 = "Heelo, Wordd!"

# SequenceMatcherを使って差分を比較
#（無視すべき要素，比較する一つ目の文字列，比較する二つ目の文字列）
matcher = difflib.SequenceMatcher(None, text1, text2)

# 差分を取得
diff = matcher.get_opcodes()
print(diff)
