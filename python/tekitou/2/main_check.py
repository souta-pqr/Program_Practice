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
df = pd.read_csv('C001_001-morphLUW.csv', encoding='shift-jis')  # ファイルパスを適切なものに置き換えてください

# 出力用のテキストを初期化
output_text = "%会話ID:" + df['会話ID'].iloc[0] + "\n"  # 会話IDを追加

# 発話内容を整形して出力テキストに追加
prev_bunsetsu_flag = 'B'
current_text = ""
current_pronunciation = ""
prev_start_time = None
counter = 1  # 順番に表示するためのカウンターを追加し、初期値を1に設定
for i, row in df.iterrows():
    bunsetsu_flag = row['文節頭フラグ']
    start_time = row['発話単位の開始時刻']
    if bunsetsu_flag == 'B':
        if current_text:
            output_text += f"{current_text} & {current_pronunciation}\n"  # 発音を出力テキストに追加
        if start_time != prev_start_time:
            # 新しい会話ID、発話単位の開始時刻、終了時刻、話者ラベルを取得し，出力テキストに追加
            conversation_id = format(counter, '04d')  # 長単位連番を利用せず、順番に'04d'の形式で表示するように変更
            counter += 1  # カウンターをインクリメント
            start_time = row['発話単位の開始時刻']
            end_time = row['発話単位の終了時刻']
            speaker_label = row['話者ラベル']
            output_text += f"{conversation_id} {start_time:.3f}-{end_time:.3f} {speaker_label}:\n"
        current_text = ""
        current_pronunciation = ""

    text = row['タグ付き書字形']
    pronunciation = row['発音'] if pd.notnull(row['発音']) else ''  # 発音列から値を取得し、値が存在しない場合は空白を設定

    # 「タグ付き書字形」の値が'(アルファベット(A~Z)'を含む場合だけ処理を行う
    if re.search(r'\([A-Z]', text) and not re.search(r'[◇＃]', text):
        # 「タグ付き書字形」の値をカタカナに変換し、「発音」の列の値と同じ場合は、「発音」の列の値を使用
        katakana_text = convert_to_katakana(text)
        # カタカナ以外の文字を削除
        katakana_text_only = re.sub(r'[^ァ-ヴーｱ-ﾝﾞﾟ]', '', katakana_text)
        if katakana_text_only == pronunciation:
            pronunciation = katakana_text
            # この行以降の処理をスキップ
            current_text += text
            current_pronunciation += pronunciation
            continue

    # タグ付き書字形が丸括弧'('で始まり次にアルファベット(A~Z)があり、半角空白があった後に何か文字がある場合、発音の先頭に'('と同じものと半角空白を追加する
    matches_start = re.finditer(r'\([A-Z]', text)
    for match_start in matches_start:
        index_start = match_start.start()
        pronunciation = pronunciation[:index_start] + '(' + text[index_start+1] + ' ' + pronunciation[index_start:]

    # タグ付き書字形が')'で終わる場合または')'の後に'。'で終わる場合、発音の最後に')'を追加する
    matches_end = re.finditer(r'\)', text)
    for match_end in matches_end:
        index_end = match_end.start()
        pronunciation = pronunciation[:index_end] + ')' + pronunciation[index_end:]

    current_text += text
    current_pronunciation += pronunciation
    prev_start_time = start_time

# ループの後に最後のテキストと発音を出力テキストに追加
if current_text:
    output_text += f"{current_text} & {current_pronunciation}\n"

# テキストをファイルに書き込む
with open('output.txt', 'w', encoding='utf-8') as file:
    file.write(output_text)
