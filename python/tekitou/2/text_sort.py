import re

# ファイルからテキストを読み込む
with open('shori/output.txt', 'r') as f:
    text = f.read()

# テキストを行ごとに分割
lines = text.strip().split('\n')

groups = []
group = []

for line in lines:
    # 'IC'で始まる行が見つかった場合、新しいグループを開始
    if re.match(r'^\d+ \d+\.\d+-\d+\.\d+ IC\d+_', line):
        # 現在のグループを保存
        if group:
            groups.append(group)
        # 新しいグループを開始
        group = [line]
    else:
        # 現在のグループに行を追加
        group.append(line)

# 最後のグループを保存
if group:
    groups.append(group)

# グループを'IC'の数字に基づいてソート
sorted_groups = sorted(groups, key=lambda g: int(re.search(r'IC(\d+)_', g[0]).group(1)) if re.search(r'IC(\d+)_', g[0]) else 0)

# ソートされたテキストを生成
sorted_text = '\n'.join('\n'.join(group) for group in sorted_groups)

# 結果をファイルに書き込む
with open('shori/sorted_output.txt', 'w') as f:
    f.write(sorted_text)
