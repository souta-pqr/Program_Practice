import random

def lottery(goods):
	#itemへの代入が行われる
	if item := random.choice(goods):
		return item
	else:
		return 'MISS!!'

books = ['notebook', 'sketchbook', None, None, None]
print(lottery(books))

def get_book(index):
	items = ['note', 'notebook', 'sketchbook']
	try:
		return items[index]
	except IndexError:
		return "範囲外です"

print(get_book(10))

