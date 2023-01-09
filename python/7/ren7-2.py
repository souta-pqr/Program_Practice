def rpstr(num, str="*"):
	if str != "":
		print("文字列あり---")
		return str*num
	else:
		print("文字列なし---")
		return "*"*num

a = input("文字列を入力してください")
b = int(input("個数をにゅうりょくしてください"))

print(rpstr(b, a))
