def has_book(items):
    copied = items.copy()
    while copied:
        item = copied.pop()
        if 'book' in item:
            print('found')
            break
        else:
            print('not found')

if __name__ == '__main__':
    items = ['pen', 'pencil', 'book', 'notebook', 'eraser']
    has_book(items)