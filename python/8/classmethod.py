class Person:
	count = 0

	def __init__(self, name, age):
		Person.count += 1
		self.name = name
		self.age = age

	def getName(self):
		return self.name

	def getAge(self):
		return self.age

	@classmethod
	def getCount(cls):
		return cls.count

pr1 = Person("小堀", 19)
pr2 = Person("佐藤", 33)

print(pr1.name, "さんは", pr1.age, "才です")
print(pr2.name, "さんは", pr2.age, "才です")
print("合計人数は", Person.getCount(), "です")
