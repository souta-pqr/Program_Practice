items = [1, 2, 3]

for i in items:
	print(f'変数iの値は{i}')

chars = 'word'

for count, char in enumerate(chars):
	print(f'{count}番目の文字は{char}')

nums = [2, 4, 6, 8]
for n in nums:
	if n % 2 == 1:
		break
else:
	print("奇数の値を含めて下さい")

n = 0;
while n < 3:
	print(f"変数iの値は{n}")
	n+=1
	if (n == 2):
		break
else:
	print("終了")

def has_book(picos):
	for pico in picos:
		if 'book' in pico:
			print('Found')
			break
	else:
		print('Not found')

has_book(['note'])
has_book(['note', 'book'])
