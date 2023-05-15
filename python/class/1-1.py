class SimpleData:
	def __init__(self):
		a = 0
		b = 0

	def __init__(self, a, b):
		self.a = a
		self.b = b	

	def __del__(self):
		print("Delete instance")

	def sum(self):
		return self.a + self.b

	def set(self, a, b):
		self.a = a
		self.b = b

class ComplexData(SimpleData):
    def __init__(self, a, b):
        super().__init__(a, b)
        self.c = 1

    def sum(self):
        return self.a + self.b + self.c


simple1 = SimpleData(32, 333)
print(simple1.sum())
complex1 = ComplexData(32, 43)
print(complex1.sum())
