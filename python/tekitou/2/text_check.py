import re

# ファイルを開く
with open('text', 'r') as f:
    lines = f.readlines()

# パターンを検索し、カウントする
pattern1 = 'K011_009aIC01'
pattern2 = 'K011_009aIC02'
count1 = sum([1 for line in lines if pattern1 in line])
count2 = sum([1 for line in lines if pattern2 in line])

# 結果を出力ファイルに書き込む
with open('text_check', 'w') as f:
    f.write(f'{pattern1} : {count1}\n')
    f.write(f'{pattern2} : {count2}\n')
