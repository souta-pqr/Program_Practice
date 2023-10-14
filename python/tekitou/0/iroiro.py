data = [1, 2, 3, 4, 5]

if 1 in data:
	print("1はあります")
else:
	print("1はありません")

data2 = [0, 1, 2, 3, 4, 5]
if any(data2):
	print("0や空の値であるものが一つでも入ってるよ")
if all(data2):
	print("0や空の値がないよ")

data3 = {"東京", "大阪", "名古屋"}
# print(data3[1]) セットは並び順のないので、できない(ディレクトリも同じく、並び順がない)

# タプルを表示
def func1(*args):
	print(args)

func1(1,2,3,4,5)

# ディクショナリとして表示
def func2(**args):
	print(args)

func2(a=1,b=2,c=3,d=4,e=5)
