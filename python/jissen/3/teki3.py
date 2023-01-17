def get_book(index):
	items = ['note', 'notebook', 'sketchbook']
	try:
		return items[index]
	except TypeError:
		print("TypeErrorが発生しました")
		return '範囲外です'

def get_book_wrapper(index):
	try:
	#IndexErrorはそのまま送出される
		return get_book(index)
	except IndexError:
		print("IndexErrorが発生しました")
		return '範囲外です'

print(get_book_wrapper(3))
