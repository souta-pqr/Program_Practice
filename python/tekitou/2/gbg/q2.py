import re

text = """
(L (D ム))
(R 沢村)さん
(L (X ＃＃＃＃＃＃))。
ん(U だ)。
(F あの)
"""

# if re.search(r'\([A-CEGHJ-Z]', text) and not re.search(r'[◇＃]+', text):
if re.search(r'\([A-Z]', text) and not re.search(r'[◇＃]+', text):
    print(text)