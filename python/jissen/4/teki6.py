def get_book(index):
	items = ['note', 'notebook', 'sketchbook']
	try:
		return items[index]
	except IndexError as e:
		print('IndexErrorが発生しました')
		raise

get_book(3)
