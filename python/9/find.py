con = input("文字列を入力してください")
key = input("検索する文字列を入力してください)")

res = con.find(key)

if res != -1:
	print(con, "の", res, "の位置に", key, "が見つかりました")
else:
	print(con, "の中に", key, "が見つかりませんでした")
