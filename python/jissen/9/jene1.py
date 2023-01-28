def gen_function(n):
	print("start")
	while n:
		print(f"yield: {n}")
		yield n
		n -= 1

gen = gen_function(2)
print(gen)

print(next(gen))
print(next(gen))
#print(next(gen)) <-error
