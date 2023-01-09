class person:

	def getName(self):
		return self.name

	def getAge(self):
		return self.age

pr = person()
pr.name = "小堀"
pr.age = 19

n = pr.getName()
a = pr.getAge()

print(n, "さんは", a, "才です")
