class Person:

	def __init__(self, name, age):
		self.name = name
		self.age = age

	def getName(self):
		return self.name

	def getAge(self):
		return self.age

class Customer(Person):
	def __init__(self, nm, ag, ad, tl):
		# 基底クラスのコンストラクタを呼び出している。
		super().__init__(nm, ag)

		self.adr = ad
		self.tel = tl

	def getName(self):
		return "顧客:" + self.name

	def getAdr(self):
		return self.adr

	def getTel(self):
		return self.tel

pr = Customer("鈴木", 23, "mmm@nnn.mm.jp", "xxx-xxx-xxxx")
pr1 = Person("鎌田", 34)

print(pr.getName(), "さんは", pr.getAge(), "才です")
print("アドレスは", pr.getAdr(), "電話番号は", pr.getTel(), "です")

print(pr1.getName(), "さんは", pr1.getAge(), "です")
