items = ["note", "notebook", "sketchbook"]
items.append("paperbook")
print(items)

items += ["book"]
print(items)

items.pop(0)
print(items)

del items[1]
print(items)

items.insert(2,"memo")
print(items)

print(items[-3])

items[0:2] = [1, 2]
print(items)

print(tuple(items))
