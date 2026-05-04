t = (1, 2, 3)
t2 = 1, 2, 3
print(t)
print(t2)

single = (1,)
print(single)

empty = ()
print (type(empty))

print(type(t2))

x, y = (1, 2)
a, b, c = 1, 2, 3

def minmax(xs):
    return min(xs), max(xs)
lo, hi = minmax([3, 1, 4])

print(lo)
print(hi)