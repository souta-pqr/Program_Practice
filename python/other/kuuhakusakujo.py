# 入力ファイルのパス
input_file_path = "変換後.txt"

# 出力ファイルのパス
output_file_path = "漢字_空白削除.txt"

# 漢字を格納するセット
kanji_set = set()

# 入力ファイルを読み込み、重複しない漢字をセットに追加
with open(input_file_path, "r", encoding="utf-8") as input_file:
    for line in input_file:
        line = line.strip()  # 行の前後の余白を削除
        for char in line:
            if char >= '\u4e00' and char <= '\u9fff':
                kanji_set.add(char)

# セットから漢字を抽出してリストに変換
unique_kanji_list = list(kanji_set)

# 漢字を行ごとに書いたファイルに保存
with open(output_file_path, "w", encoding="utf-8") as output_file:
    for kanji in unique_kanji_list:
        output_file.write(kanji + "\n")

print("重複漢字を削除し、別のファイルに保存しました。")
