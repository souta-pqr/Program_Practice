def infinite_sequence():
    num = 0
    while True:
        yield num
        num += 1

for value in infinite_sequence():
    print(value)
    if value > 5:
        break