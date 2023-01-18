d = {'x': 'note', 'y':'notebook', 'z':'sketchbook'}

books = '{x} {z}'
print(books.format(**d))

book = 'book'
print("note%s" % (book))
print("python practice %s: %d" % (book, 1.0))

book = "python実践入門"
print(type(book))

encoded = book.encode("utf-8")
print(type(encoded))
print(encoded)

print(encoded.decode("utf-8"))

print(list("book"))
