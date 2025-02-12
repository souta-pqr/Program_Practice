squares = {}

for x in range(10):
    squares[x] = x ** 2

print(squares)

squares = {x: x ** 2 for x in range(10)}

print(squares)

squares = {}

for x in range(10):
    if x % 2 == 0:
        squares[x] = x ** 2

print(squares)

squares = {x: x ** 2 for x in range(10) if x % 2 == 0}

print(squares)