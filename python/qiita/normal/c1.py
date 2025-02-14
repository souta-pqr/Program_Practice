from itertools import tee

data = [1, 2, 3]
iter1, iter2, iter3 = tee(data, 3)

print(list(iter1))
print(list(iter2))
print(list(iter3))

print(id(iter1))
print(id(iter2))
print(id(iter3))

print(iter1 == iter2)
print(iter1 is iter2)

a = [1, 2, 3]
b = [1, 2, 3]

print(a == b)
print(a is b)

a = [1, 2, 3]
b = a

print(a == b)
print(a is b)