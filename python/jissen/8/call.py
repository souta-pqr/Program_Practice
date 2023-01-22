class Adder:
	def __init__(self):
		self._values = []
	def add(self, x):
		self._values.append(x)
	def __call__(self):
		return sum(self._values)

adder = Adder()
adder.add(1)
adder.add(3)
print(adder())

adder.add(5)
print(adder())
