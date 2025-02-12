result = []

for x in range(10):
    result.append(x)

print(result)

result = [x for x in range(10)]

print(result)

result = []

for x in range(10):
    if x % 2 == 0:
        result.append(x)

print(result)

result = [x for x in range(10) if x % 2 == 0]

print(result)