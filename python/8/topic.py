class Person:

	def __str__(self):
		str = self.name + "さんは"
		return str
	
	def getName(self):
		return self.name

class A:

	def __init__(self, num):
		self.num = num

	def __add__(self, other):
		return self.num + other.num

pr = Person()
pr.name = "鈴木"
print(str(pr))

a1 = A(3)
a2 = A(2)
print(a1 + a2)
