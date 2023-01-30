# __set__()を持つクラスはデータでスクリプタ
class TextField:
	def __set_name__(self, owner, name):
		print(f"__set_name__ was called")
		print(f"{owner=}, {name=}")
		self.name = name
	def __set__(self, instance, value):
		print("__set__ was called")
		if not isinstance(value, str):
			raise AttributeError("must be str")
		# ドット記法ではなく属性辞書を使って格納
		instance.__dict__[self.name] = value
	def __get__(self, instance, owner):
		print("__get__ was called")
		return instance.__dict__[self.name]

class Book:
	title = TextField()

book = Book()
book.title = "Python Practice Book"

notebook = Book()
notebook.title = "Notebook"

print(book.title)
print(notebook.title)
