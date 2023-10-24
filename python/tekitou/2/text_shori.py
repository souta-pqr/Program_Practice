import re

# 入力の文章
text = '''
0001 0.048-0.133 IC01_玲子:
え。 & エ
0002 0.133-1.866 IC01_玲子:
それで & ソレデ
落ち & オチ
(L (D ム)) & (L (D ム))
(L 落ち武者は & (L オチムシャワ
(U 何/何人))。 & (U ナニ))
0003 0.755-1.239 IC02_夏樹:
そいで。 & ソイデ
0004 1.071-1.298 IC04_美沙:
え。 & エ
0005 1.298-1.858 IC04_美沙:
落ち武者?。 & オチムシャ
0006 2.062-5.115 IC04_美沙:
落ち武者  & オチムシャ
えーと  & エート
落ち武者は & オチムシャワ
(R 沢村)さんて & (R サワムラ)サンテ
ゆう & ユー
人で:。 & ヒトデー
0007 3.733-4.141 IC05_美香:
あー。 & アー
0008 7.615-9.782 IC02_夏樹:
名前  & ナマエ
出しちゃったよ:。 & ダシチャッタヨー
'''

# テキストを行ごとに分割
lines = text.strip().split('\n')

cleaned_lines = []

for line in lines:
    if 'D' not in line or 'F' not in line:
        cleaned_line = re.sub(r'[A-CEG-Z()]', '', line)
    else:
        cleaned_line = line

    # アルファベットが残っている場合、丸括弧で囲む
    cleaned_line = re.sub(r'([A-Z] [^\s]+)', r'(\1)', cleaned_line)

    cleaned_lines.append(cleaned_line)

# 結果を出力
cleaned_text = '\n'.join(cleaned_lines)
print(cleaned_text)
