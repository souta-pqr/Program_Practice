import re

# ファイルからテキストを読み込む
with open('shori/output.txt', 'r') as f:
    text = f.read()

# テキストを行ごとに分割
lines = text.strip().split('\n')

# 最初の行を取得
first_line = lines[0]

ic_groups = []
n_groups = []
z_groups = []
group = []
group_type = None

for line in lines[1:]:  # 最初の行をスキップ
    # 'IC'で始まる行が見つかった場合、新しいグループを開始
    if re.match(r'^\d+ \d+\.\d+-\d+\.\d+ IC\d+_', line):
        # 現在のグループを保存
        if group and group_type == 'IC':
            ic_groups.append(group)
        elif group and group_type == 'N':
            n_groups.append(group)
        elif group and group_type == 'Z':
            z_groups.append(group)
        # 新しいグループを開始
        group = [line]
        group_type = 'IC'
    # 'N'で始まる行が見つかった場合、新しいグループを開始
    elif re.match(r'^\d+ \d+\.\d+-\d+\.\d+ N\d+_', line):
        # 現在のグループを保存
        if group and group_type == 'IC':
            ic_groups.append(group)
        elif group and group_type == 'N':
            n_groups.append(group)
        elif group and group_type == 'Z':
            z_groups.append(group)
        # 新しいグループを開始
        group = [line]
        group_type = 'N'
    # 'Z'で始まる行が見つかった場合、新しいグループを開始
    elif re.match(r'^\d+ \d+\.\d+-\d+\.\d+ Z\d+[A-Z]_', line):
        # 現在のグループを保存
        if group and group_type == 'IC':
            ic_groups.append(group)
        elif group and group_type == 'N':
            n_groups.append(group)
        elif group and group_type == 'Z':
            z_groups.append(group)
        # 新しいグループを開始
        group = [line]
        group_type = 'Z'
    else:
        # 現在のグループに行を追加
        group.append(line)

# 最後のグループを保存
if group and group_type == 'IC':
    ic_groups.append(group)
elif group and group_type == 'N':
    n_groups.append(group)
elif group and group_type == 'Z':
    z_groups.append(group)

# グループを'IC'または'N'または'Z'の数字に基づいてソート
sorted_ic_groups = sorted(ic_groups, key=lambda g: int(re.search(r'IC(\d+)_', g[0]).group(1)) if re.search(r'IC(\d+)_', g[0]) else 0)
sorted_n_groups = sorted(n_groups, key=lambda g: int(re.search(r'N(\d+)_', g[0]).group(1)) if re.search(r'N(\d+)_', g[0]) else 0)
sorted_z_groups = sorted(z_groups, key=lambda g: int(re.search(r'Z(\d+)[A-Z]_', g[0]).group(1)) if re.search(r'Z(\d+)[A-Z]_', g[0]) else 0)

# ソートされたテキストを生成
sorted_text = first_line + '\n' + '\n'.join('\n'.join(group) for group in sorted_ic_groups + sorted_n_groups + sorted_z_groups)

# 結果をファイルに書き込む
with open('shori/sorted_output.txt', 'w') as f:
    f.write(sorted_text)
