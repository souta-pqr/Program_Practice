
# ファイルを開く
with open('data1/eval1/text', 'r') as text_file, open('data1/eval1/utt2spk', 'r') as segments_file:
    text_lines = text_file.readlines()
    segments_lines = segments_file.readlines()

# 各行を比較
for i in range(len(text_lines)):
    # 半角空白より前の部分を取得
    text_prefix = text_lines[i].split(' ')[0]
    segments_prefix = segments_lines[i].split(' ')[0]

    # プレフィックスが異なる場合、segmentsのプレフィックスをtextのプレフィックスに置き換え
    if text_prefix != segments_prefix:
        segments_lines[i] = segments_lines[i].replace(segments_prefix, text_prefix)

# segmentsファイルを更新
with open('data1/eval1/utt2spk', 'w') as segments_file:
    for line in segments_lines:
        segments_file.write(line)