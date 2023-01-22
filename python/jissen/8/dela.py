class Point:
	def __init__(self, x, y):
		self.x = x
		self.y = y
	def __delattr__(self, name):
		if name in ("x", "y"):
			raise AttributeError("Not allowed")
		super().__delattr__(name)

p = Point(1, 2)
del p.x # 呼び出してerrorをはいてくれる
