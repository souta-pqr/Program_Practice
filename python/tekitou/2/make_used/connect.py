import re

def remove_text(input_file, output_file):
    with open(input_file, 'r') as file:
        lines = file.readlines()
    output_lines = []
    for i in range(len(lines)):
        line = lines[i]
        # '(R 文字)ー' または '(R 文字)' または '(R 文字)ョー' のパターンを探し、見つかった場合は削除します
        line = re.sub(r'& \(R .*?\)(ー|ョー)?', '& ', line)
        # '(アルファベット(A~Z) (R 文字))'というパターンの文字列を削除
        line = re.sub(r'\([A-Z]\s\(R\s.*?\)\)', '', line)
        # '(アルファベット(A~Z) (R 文字)文字)'のパターンを探し、'(R 文字)'の部分を削除します
        line = re.sub(r'\([A-Z]\s\(R\s.*?\)\w+\)?', lambda m: m.group(0).replace(m.group(0)[3:-1], ''), line)
        # '(R 文字)(R 文字)'のパターンを探し、見つかった場合は削除します
        line = re.sub(r'\(R\s.*?\)\(R\s.*?\)', '', line)
        # '(R 文字)'のパターンを探し、見つかった場合は削除します
        line = re.sub(r'\(R\s.*?\)', '', line)
        if (re.match(r'^[&。\s]*$', line) or re.match(r'^[\(\)&A-Za-z\s]*$', line)):
            if i > 0 and re.match(r'^\d', lines[i-1]) and (i == len(lines)-1 or not re.match(r'^\d', lines[i+1])):
                continue
            elif i > 0 and re.match(r'^\d', lines[i-1]) and i < len(lines)-1 and re.match(r'^\d', lines[i+1]):
                output_lines.pop()
                continue
        else:
            # ')'の後ろに半角空白が2つ以上ある場合は、半角空白を一つにする
            line = re.sub(r'\)\s{2,}', ') ', line)
            output_lines.append(line.strip())
    with open(output_file, 'w') as file:
        file.write('\n'.join(output_lines))

input_file = "shori/output.txt"
output_file = "shori/connect.txt"

remove_text(input_file, output_file)
