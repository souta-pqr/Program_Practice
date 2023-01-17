def get_book_upper(index):
	items = ['note', 'notebook', 'sketchbook']
	try:
		book = str(items[index])
	except (IndexError, TypeError) as e:
		print(f,"例外が発生しました:{e}")
	else:
		return book.upper()

print(get_book_upper(2))
