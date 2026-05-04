xs = [10, 20, 30, 40]
xs.extend([60, 70])
print(xs)
xs.append(50)
print(xs)
xs.insert(0, 0)
print(xs)
xs.extend("sddd")
print(xs)

print(xs.pop())
# print(xs.sort())
# print(xs.reverse())

print([x**2 for x in range(5)])

xs1 = [1, 2, 3, 4, 5, 6, 7, 8]
print([x for x in xs1 if x % 2 == 0])
