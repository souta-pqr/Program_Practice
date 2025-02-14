from itertools import compress

data = ["a", "b", "c", "d", "e"]
selectors = [1, 0, 0, 1, 1]

print(list(compress(data, selectors)))