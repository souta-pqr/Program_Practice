import os
import pandas as pd

# CSVファイルが格納されているディレクトリ
directory = './iemocap/'

# ディレクトリ内のすべてのCSVファイルを検査
for filename in os.listdir(directory):
    if filename.endswith('.csv'):
        df = pd.read_csv(os.path.join(directory, filename))
        if 'file' in df.columns:
            print(f"'file'カラムが存在します：{filename}")
        else:
            print(f"'file'カラムが存在しません：{filename}")
