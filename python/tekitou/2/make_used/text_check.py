import re

# ファイルを開く
with open('text1', 'r') as f:
    lines = f.readlines()

# パターンを検索し、カウントする
pattern1 = 'T014_012IC03'
pattern2 = 'T014_012IC04'
count1 = sum([1 for line in lines if pattern1 in line])
count2 = sum([1 for line in lines if pattern2 in line])

# 結果を出力ファイルに書き込む
with open('text_check', 'w') as f:
    f.write(f'{pattern1} : {count1}\n')
    f.write(f'{pattern2} : {count2}\n')
