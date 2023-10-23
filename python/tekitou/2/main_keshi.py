from pykakasi import kakasi
import pandas as pd
import re

def convert_to_katakana(text):
    k = kakasi()
    k.setMode('H', 'K')  # ひらがなをカタカナに
    k.setMode('K', 'K')  # カタカナをカタカナに（変換なし）
    k.setMode('J', 'K')  # 漢字をカタカナに
    conv = k.getConverter()
    return conv.do(text)

# CSVファイルを読み込み
df = pd.read_csv('C001_001-morphLUW.csv', encoding='shift-jis')

# 出力用のテキストを初期化
output_text = "%会話ID:" + df['会話ID'].iloc[0] + "\n"

prev_bunsetsu_flag = 'B'
current_text = ""
current_pronunciation = ""
prev_start_time = None
counter = 1
for i, row in df.iterrows():
    bunsetsu_flag = row['文節頭フラグ']
    start_time = row['発話単位の開始時刻']
    if bunsetsu_flag == 'B':
        if current_text:
            output_text += f"{current_text} & {current_pronunciation}\n"
        if start_time != prev_start_time and current_text:
            conversation_id = format(counter, '04d')
            counter += 1
            start_time = row['発話単位の開始時刻']
            end_time = row['発話単位の終了時刻']
            speaker_label = row['話者ラベル']
            output_text += f"{conversation_id} {start_time:.3f}-{end_time:.3f} {speaker_label}:\n"
        current_text = ""
        current_pronunciation = ""

    text = row['タグ付き書字形']
    pronunciation = row['発音'] if pd.notnull(row['発音']) else ''

    if re.search(r'\([A-Z]', text) and not re.search(r'[◇＃]+', text):
        katakana_text = convert_to_katakana(text)
        katakana_text_only = re.sub(r'[^ァ-ヴーｱ-ﾝﾞﾟ]', '', katakana_text)
        if katakana_text_only == pronunciation:
            pronunciation = katakana_text
            current_text += text
            current_pronunciation += pronunciation
            continue

    matches_start = re.finditer(r'\([A-Z]', text)
    for match_start in matches_start:
        index_start = match_start.start()
        pronunciation = pronunciation[:index_start] + '(' + text[index_start+1] + ' ' + pronunciation[index_start:]

    matches_end = re.finditer(r'\)', text)
    for match_end in matches_end:
        index_end = match_end.start()
        pronunciation = pronunciation[:index_end] + ')' + pronunciation[index_end:]

    # '(X ＃＃＃＃)。'や'(L ◇)'や'(L (X ＃＃＃＃))。'のようなパターンを削除する
    current_text += re.sub(r'\([A-Z] [＃◇]+\)。|\([A-Z] [＃◇]+\)|\([A-Z] \([A-Z] [＃◇]+\)\)。', '', text)
    current_pronunciation += re.sub(r'\([A-Z] [＃◇]+\)。|\([A-Z] [＃◇]+\)|\([A-Z] \([A-Z] [＃◇]+\)\)。', '', pronunciation)

    prev_start_time = start_time

if current_text:
    output_text += f"{current_text} & {current_pronunciation}\n"

with open('output_keshi.txt', 'w', encoding='utf-8') as file:
    file.write(output_text)
