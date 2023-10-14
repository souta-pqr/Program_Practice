def get_book(index):
    items = ['pen', 'pencil', 'book', 'notebook', 'eraser']
    try:
        return items[index]
    except IndexError:
        return '範囲外'

if __name__ == '__main__':
    print(get_book(8)) # 範囲外