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

def read_csv_file(file_path):
    return pd.read_csv(file_path, encoding='shift-jis')

def get_conversation_info(df):
    conversation_info = df.iloc[0]
    return conversation_info['会話ID'], format(conversation_info['長単位連番'], '04d'), conversation_info['発話単位の開始時刻'], conversation_info['発話単位の終了時刻'], conversation_info['話者ラベル']

def add_conversation_id(output_text, kaiwa_id):
    return output_text + f"%会話ID:{kaiwa_id}\n"

def process_rows(df, output_text):
    for i, row in df.iterrows():
        if row['文節頭フラグ'] == 'B':
            conversation_id, start_time, end_time, speaker_label = format(row['長単位連番'], '04d'), row['発話単位の開始時刻'], row['発話単位の終了時刻'], row['話者ラベル']
            output_text += f"{conversation_id} {start_time:.3f}-{end_time:.3f} {speaker_label}:\n"

        text = row['タグ付き書字形']
        pronunciation = row['発音'] if pd.notnull(row['発音']) else ''

        if re.search(r'\([A-Z]', text) and not re.search(r'[◇＃]', text):
            katakana_text = convert_to_katakana(text)
            katakana_text_only = re.sub(r'[^ァ-ヴーｱ-ﾝﾞﾟ]', '', katakana_text)
            if katakana_text_only == pronunciation:
                pronunciation = katakana_text
                output_text += f"{text} & {pronunciation}\n"
                continue

        matches_start = re.finditer(r'\([A-Z]', text)
        for match_start in matches_start:
            index_start = match_start.start()
            pronunciation = pronunciation[:index_start] + '(' + text[index_start+1] + ' ' + pronunciation[index_start:]

        matches_end = re.finditer(r'\)', text)
        for match_end in matches_end:
            index_end = match_end.start()
            pronunciation = pronunciation[:index_end] + ')' + pronunciation[index_end:]

        output_text += f"{text} & {pronunciation}\n"
    return output_text

def write_to_file(output_text, file_path='output.txt'):
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(output_text)

# CSVファイルを読み込み
df = read_csv_file('C001_001-morphLUW.csv')  # ファイルパスを適切なものに置き換えてください

# 出力用のテキストを初期化
output_text = ""

# 会話ID、発話単位の開始時刻、終了時刻、話者ラベルの部分を取得
kaiwa_id, conversation_id, start_time, end_time, speaker_label = get_conversation_info(df)

# 会話IDを出力テキストの一番上に追加
output_text = add_conversation_id(output_text, kaiwa_id)

# 発話内容を整形して出力テキストに追加
output_text = process_rows(df, output_text)

# テキストをファイルに書き込む
write_to_file(output_text)
