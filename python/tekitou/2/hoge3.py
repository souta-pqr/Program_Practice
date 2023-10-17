import pandas as pd
import re

# CSVファイルを読み込み
df = pd.read_csv('C001_001-morphLUW.csv', encoding='shift-jis')  # ファイルパスを適切なものに置き換えてください

# 出力用のテキストを初期化
output_text = ""

# 会話ID、発話単位の開始時刻、終了時刻、話者ラベルの部分を取得
conversation_info = df.iloc[0]
kaiwa_id = conversation_info['会話ID']
conversation_id = format(conversation_info['長単位連番'], '04d')  # 長単位連番を4桁で表示するように変更
start_time = conversation_info['発話単位の開始時刻']
end_time = conversation_info['発話単位の終了時刻']
speaker_label = conversation_info['話者ラベル']

# 会話IDを出力テキストの一番上に追加
output_text += f"%会話ID:{kaiwa_id}\n"

# 会話ID、開始時刻、終了時刻、話者ラベルを出力テキストに追加
output_text += f"{conversation_id} {start_time:.3f}-{end_time:.3f} {speaker_label}:\n"

# 発話内容を整形して出力テキストに追加
for i, row in df.iterrows():
    if i > 0 and (row['長単位連番'] != conversation_id or row['発話単位の開始時刻'] != start_time):
        # 新しい会話ID、発話単位の開始時刻、終了時刻、話者ラベルを取得し，出力テキストに追加
        conversation_id = format(row['長単位連番'], '04d')  # 長単位連番を4桁で表示するように変更
        start_time = row['発話単位の開始時刻']
        end_time = row['発話単位の終了時刻']
        speaker_label = row['話者ラベル']
        output_text += f"{conversation_id} {start_time:.3f}-{end_time:.3f} {speaker_label}:\n"

    text = row['タグ付き書字形']
    pronunciation = row['発音'] if pd.notnull(row['発音']) else ''  # 発音列から値を取得し、値が存在しない場合は空白を設定
    output_text += f"{text} & {pronunciation}\n"  # 発音を出力テキストに追加

# テキストをファイルに書き込む
with open('output.txt', 'w', encoding='utf-8') as file:
    file.write(output_text)
