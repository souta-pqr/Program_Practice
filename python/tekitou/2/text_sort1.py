import re

# ファイルからテキストを読み込む
with open('shori/output.txt', 'r') as f:
    text = f.read()

# テキストを行ごとに分割
lines = text.strip().split('\n')

ic_groups = []
n_groups = []
group = []

for line in lines:
    # 'IC'で始まる行が見つかった場合、新しいグループを開始
    if re.match(r'^\d+ \d+\.\d+-\d+\.\d+ IC\d+_', line):
        # 現在のグループを保存
        if group:
            #re.match(r'^\d+ \d+\.\d+-\d+\.\d+ N\d+_', line)を実行して，Trueなら
            #elif re.match(r'^\d+ \d+\.\d+-\d+\.\d+ N\d+_', line):この部分のブロックを実行するようにする
            ic_groups.append(group)
        # 新しいグループを開始
        group = [line]
    # 'N'で始まる行が見つかった場合、新しいグループを開始
    elif re.match(r'^\d+ \d+\.\d+-\d+\.\d+ N\d+_', line):
        # 現在のグループを保存
        if group:
            #re.match(r'^\d+ \d+\.\d+-\d+\.\d+ N\d+_', line):を実行して，Trueなら
            #if re.match(r'^\d+ \d+\.\d+-\d+\.\d+ N\d+_', line):この部分のブロックを実行するようにする
            n_groups.append(group)
        # 新しいグループを開始
        group = [line]
    else:
        # 現在のグループに行を追加
        group.append(line)

# 最後のグループを保存
if group:
    ic_groups.append(group)

# グループを'IC'または'N'の数字に基づいてソート
sorted_ic_groups = sorted(ic_groups, key=lambda g: int(re.search(r'IC(\d+)_', g[0]).group(1)) if re.search(r'IC(\d+)_', g[0]) else 0)
sorted_n_groups = sorted(n_groups, key=lambda g: int(re.search(r'N(\d+)_', g[0]).group(1)) if re.search(r'N(\d+)_', g[0]) else 0)

# print(sorted_n_groups)
# ソートされたテキストを生成
sorted_text = '\n'.join('\n'.join(group) for group in sorted_ic_groups + sorted_n_groups)

# 結果をファイルに書き込む
with open('shori/sorted_output.txt', 'w') as f:
    f.write(sorted_text)
