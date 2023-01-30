class LazyProperty:
	def __init__(self, func):
		self.func = func
		self.name = func.__name__
	def __get__(self, instance, owner):
		if not instance:
			# クラス変数としてアクセスされたときの処理
			return self
		# self.funcは関数なので明示的にインスタンスを渡す
		v = self.func(instance)
		instance.__dict__[self.name] = v
		return v

TAX_PATE = 1.10
class Book:
	def __init__(self, raw_price):
		self.raw_price = raw_price
	@LazyProperty
	def price(self):
		print("calculate the price")
		return int(self.raw_price * TAX_PATE)

book = Book(1980)
print(book.price)

print(book.price)
