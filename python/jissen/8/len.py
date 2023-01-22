class A:
	def __len__(self):
		return 5

a = A()
print(len(a))

class B:
	def __len__(self):
		return -1

b = B()
print(len(b)) # ERROR
