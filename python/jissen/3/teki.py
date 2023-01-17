def has_book(items):
	# pop()はリストの内容を変更するのでコピーを作る
	copied = items.copy()
	# 空になるまでループを続ける
	while copied:
		# 最後の要素を取り出す
		item = copied.pop()
		if 'book' in item:
			print('Found')
			break
	else:
		print('Not found')

has_book(['note'])
has_book(['note', 'notebook'])

def list_books(ars):
	for ar in ars:
		if 'book' not in ar:
		# 以降の処理をスキップして次のループに移る
			continue
		print(ar)

list_books(['note', 'notebook', 'sketchbook'])

def list_books(rts):
	copied = rts.copy()
	while copied:
	# 先頭の処理を取り出す
		rt = copied.pop(0)
		if 'book' not in rt:
			continue
		print(rt)

list_books(['note', 'notebook', 'sketchbook'])
