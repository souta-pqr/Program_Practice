import re

# ファイルを開く
with open('segments1', 'r') as f:
    lines = f.readlines()

# パターンを検索し、数値の差を計算する
pattern1 = 'T014_012IC03'
pattern2 = 'T014_012IC04'
sum1 = sum([float(line.split()[-1]) - float(line.split()[-2]) for line in lines if pattern1 in line])
sum2 = sum([float(line.split()[-1]) - float(line.split()[-2]) for line in lines if pattern2 in line])

# 結果を出力ファイルに書き込む
with open('text_check', 'w') as f:
    f.write(f'{pattern1} : {sum1}\n')
    f.write(f'{pattern2} : {sum2}\n')
