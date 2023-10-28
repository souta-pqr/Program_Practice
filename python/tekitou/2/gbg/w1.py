import re

def remove_text(input_file, output_file):
    with open(input_file, 'r') as file:
        lines = file.readlines()
    output_lines = []
    for i in range(len(lines)):
        line = lines[i]
        if '& ' in line and '(R ' in line:  # ここで条件を変更します
            start_index = line.find('& (R ')
            end_index = line.find(')', start_index)
            if line[end_index+1:end_index+2] == 'ー':
                line = line[:start_index] + '& ' + line[end_index+2:]
            else:
                line = line[:start_index] + '& ' + line[end_index+1:]
        # '(アルファベット(A~Z) (R 文字))'というパターンの文字列を削除
        line = re.sub(r'\([A-Z]\s\(R\s.*?\)\)', '', line)
        # '(R 文字)'というパターンの文字列を削除
        line = re.sub(r'\(R\s.*?\)', '', line)
        # '。'，'&'だけしか残らない行は，その上が数字から始まる場合はその行と，その行自体を削除
        if (line.strip() == '。 & 。' or line.strip() == '&') and i > 0 and re.match(r'^\d', lines[i-1]):
            output_lines.pop()
        else:
            # '& の前に半角空白が2つ以上ある場合、半角空白を一つにする
            line = re.sub(r'\s+&', ' &', line)
            # '& の前後に半角空白がない場合も、半角空白を一つ入れる
            line = re.sub(r'([^ ])&', r'\1 &', line)
            line = re.sub(r'&([^ ])', r'& \1', line)
            output_lines.append(line.strip())
    with open(output_file, 'w') as file:
        file.write('\n'.join(output_lines))

input_file = "../shori/output.txt"
output_file = "../shori/connect.txt"

remove_text(input_file, output_file)
