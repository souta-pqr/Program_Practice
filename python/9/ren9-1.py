print("ファイルのリストは以下です。")

list = ["Sample.csv", "Sample.exe", "Sample1.py", "Sample2.py", "Sample.txt", "index.html"]

for lis in list:
	print(lis)

a = input("拡張子を入力してください")
print("拡張するファイルのリストは以下です")

for b in list:
	res = b.find(a)
	if res != -1:
		print(b)
