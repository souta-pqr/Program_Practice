class Point:
	def __init__(self, **kwargs):
		self.value = kwargs
	def __enter__(self):
		print("__enter__ was called")
		return self.value # as節で渡される
	def __exit__(self, exc_type, exc_value, traceback):
		print("__exit__ was called")
		print(self.value)

with Point(x=1, y=2) as p:
	print(p)
	p["z"] = 3
