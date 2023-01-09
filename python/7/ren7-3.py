def makex(x):
	while True:
		yield x
		x += 1

a = int(input("開始値（整数）を入力してください"))
b = int(input("停止値（整数）を入力してください"))

for n in makex(a):
	if n >= b:
		break
	print(n)

