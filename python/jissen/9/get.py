# __get__()のみであれば非データデスクリプタ

class TextField:
	def __init__(self, value):
		if not isinstance(value, str):
			raise AttributeError("must be str")
		self.value = value
	def __set_name__(self, owner, name):
		print(f"__set_name__ was called")
		print(f"{owner=}, {name=}")
	def __get__(self, instance, owner):
		print("__get__ was called")
		return self.value

class Book:
	title = TextField("python Practice Book")

book = Book()

# 代入時の取得時には__get__()が呼ばれる
print(book.title)

# 代入するとインスタンス変数になる
book.title = "Book"

# インスタンス変数があると__get__()は呼ばれない
print(book.title)
