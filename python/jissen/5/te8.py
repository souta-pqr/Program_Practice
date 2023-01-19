def add(x, /, y, z):
	return x+y+z

print(add(1, 2, 4))
print(add(1, y=2, z=5))
 
# print(add(x=4, y=3, z=3)) これはダメ
