import pandas as pd

# Shift_JISエンコーディングでCSVファイルを読み込む
df = pd.read_csv('csv/C001_003-morphLUW.csv', encoding='shift_jis')

# '話者ラベル'の列で'IC01_玲子'の行を抽出
df_IC01 = df[df['話者ラベル'] == 'IC01_玲子']

# '話者ラベル'の列で'IC02_夏樹'の行を抽出
df_IC02 = df[df['話者ラベル'] == 'IC02_夏樹']

# 抽出したデータをそれぞれ新しいCSVファイルに保存（UTF-8エンコーディングで）
df_IC01.to_csv('IC01_玲子.csv', index=False, encoding='utf_8_sig')
df_IC02.to_csv('IC02_夏樹.csv', index=False, encoding='utf_8_sig')
