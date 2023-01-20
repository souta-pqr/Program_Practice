class A:
	def hello(self):
		print("Hello")

class B(A):
	def hello(self):
		print("Hola")
		super().hello()

class C(A):
	def hello(self):
		print("ニーハオ")
		super().hello()

class D(B, C):
	def hello(self):
		print("こんにちは")
		super().hello()

d = D()
d.hello()

print(D.__mro__) # メソッド解決順序を確認
