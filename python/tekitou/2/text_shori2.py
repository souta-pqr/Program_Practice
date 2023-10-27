import re

# ファイルからテキストを読み込む
with open('shori/sorted_output.txt', 'r') as f:
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
        # 2つ以上連続した閉じ括弧を1つにする
        cleaned_line = re.sub(r'\)\)+', r')', line)
        cleaned_lines.append(cleaned_line)
        continue

    cleaned_line = re.sub(r'\([A-CEG-Z] ', '', line)
    cleaned_line = re.sub(r'\)', '', cleaned_line)

    # アルファベットが残っている場合、丸括弧で囲む
    cleaned_line = re.sub(r'([A-Z] [^\s]+)', r'\1)', cleaned_line)

    # 空白を削除して左揃えにする
    # cleaned_line = re.sub(r'^\s+', '', cleaned_line)

    # '&'の前後の空白を一時的に保護する
    cleaned_line = re.sub(r'\s*&\s*', 'TEMP', cleaned_line)

    # 余分なスペースを削除
    cleaned_line = re.sub(r'\s+', '', cleaned_line)

    # 保護した'&'の前後の空白を復元する
    cleaned_line = re.sub('TEMP', ' & ', cleaned_line)

    # アルファベットの後に半角空白がない場合に半角空白を追加
    cleaned_line = re.sub(r'([A-Z])(?=[^ ])', r'\1 ', cleaned_line)

    # '+'と'{}'の中身を含むすべての部分を排除する
    cleaned_line = re.sub(r'\+?{.*?}', '', cleaned_line)

    cleaned_lines.append(cleaned_line)

# 結果を出力
cleaned_text = '\n'.join(cleaned_lines)

# 結果をファイルに書き込む
with open('shori/text_process.txt', 'w') as f:
    f.write(cleaned_text)
