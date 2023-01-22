class Reverser:
	def __init__(self, x):
		self.x = x
	def __iter__(self):
		return self
	def __next__(self):
		try:
			return self.x.pop()
		except IndexError:
			raise StopIteration()

print([val for val in Reverser([1, 2, 3])])
