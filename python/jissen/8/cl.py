class Point:
	pass

p = Point()
print(p.__dict__)

p.x = 1
print(p.__dict__)

p.__dict__["y"] = 2
print(p.y)
