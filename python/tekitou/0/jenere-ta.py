def makex(x):
	while True:
		yield x
		x += 1

n = makex(0)
print(next(n))
print(next(n))
