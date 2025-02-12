import operator

print(operator.add(2, 3))

print(operator.mul(4, 5))

print(operator.eq(3, 3))
print(operator.lt(2, 5))

print(operator.and_(True, False))
print(operator.or_(True, False))

print(operator.and_(5, 3))
print(operator.or_(5, 3))

lst = [10, 20, 30, 40]
print(operator.getitem(lst, 2))

operator.setitem(lst, 1, 25)
print(lst)

numbers = [1, 2, 3, 4]
print(list(map(operator.add, numbers, [10, 10, 10, 10])))
