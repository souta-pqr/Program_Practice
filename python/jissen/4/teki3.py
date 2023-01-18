print(dict(note=1, notebook=2, sketchbook=3))

items = {"note":1, "notebook":2, "sketchbook":3}
items["book"] = 4

print(items.pop("notebook"))
del items["sketchbook"]
print(items)

print(items.get("book"))
print(items.get("notebook", 0))
