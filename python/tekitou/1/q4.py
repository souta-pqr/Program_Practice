def get_book(index):
    items = ['pen', 'pencil', 'book', 'notebook', 'eraser']
    try:
        book = items[index]
    except (IndexError, TypeError) as e:
        print("例外発生 " + str(e))
        return '範囲外'
    else:
        return book.upper()
    # finallyはファイル操作の時に役立ったりする．
    # finally:
        # f.close()
    finally:
        print('Last')
    
if __name__ == '__main__':
    print(get_book(4))