import re

# ファイルからテキストを読み込む
with open('sorted_output.txt', 'r') as f:
    text = f.read()

# テキストを行ごとに分割
lines = text.strip().split('\n')

cleaned_lines = []

for line in lines:
    # 数字や'%'で始まる行はスキップする
    if re.match(r'^\d', line) or re.match(r'^%', line):
        cleaned_lines.append(line)
        continue
    
    if ('D' in line or 'F' in line) and not re.search('[A-CEG-Z]', line):
        cleaned_lines.append(line)
        continue

    cleaned_line = re.sub(r'\([A-CEG-Z] ', '', line)
    cleaned_line = re.sub(r'\)', '', cleaned_line)

    # アルファベットが残っている場合、丸括弧で囲む
    cleaned_line = re.sub(r'([A-Z] [^\s]+)', r'\1)', cleaned_line)

    # 空白を削除して左揃えにする
    # cleaned_line = re.sub(r'^\s+', '', cleaned_line)

    cleaned_lines.append(cleaned_line)

# 結果を出力
cleaned_text = '\n'.join(cleaned_lines)

# 結果をファイルに書き込む
with open('text_process.txt', 'w') as f:
    f.write(cleaned_text)
