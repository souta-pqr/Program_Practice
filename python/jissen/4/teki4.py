items = {"note":1, "notebook":2, "sketchbook":3}
for value in items.values():
	print(value)

for key in items:
	print(key)

for key, value in items.items():
	print(key, value)

bunn = {"note", "notebook", "sketchbook"}
print(type(bunn))
print(bunn)

bunn.add("book")
print(bunn)

bunn.remove("book")
print(bunn)

bunn.pop()
print(bunn)
