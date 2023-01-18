items = frozenset(["note", "notebook", "sketchbook"])
print(type(items))
# .add等の変更をすることはできない

set_a = {"note", "notebook", "sketchbook"}
set_b = {"book", "rulebook", "sketchbook"}
print(set_a | set_b)
print(set_a.union(set_b))
print(set_a - set_b)
print(set_a & set_b)
print(set_a ^ set_b)
print({"note", "notebook"} <= set_a)

numbers = []
for i in range(10):
	numbers.append(i)

print(numbers)
print(i)

print([str(v) for v in range(10)])

tuples = []
for x in [1, 2, 3]:
	for y in [4, 5, 6]:
		tuples.append((x, y))

print(tuples)

print([(x,y) for x in [1, 2, 3] for y in [4, 5, 6]])
