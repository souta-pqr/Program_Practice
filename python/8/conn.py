class Person:

	def __init__(self, name, age):
		self.name = name
		self.age = age

	def getName(self):
		return self.name

	def getAge(self):
		return self.age

pr = Person("小堀", 19)

print(pr.getName(), "さんは", pr.getAge(), "さいです")
