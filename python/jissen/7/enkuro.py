def f():
	x = "x"
	def g():
		nonlocal x
		x = 1
		print(x)
	g()
	print(x)

f()
