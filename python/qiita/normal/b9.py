from itertools import filterfalse
from itertools import chain

data = [1, 4, 9, 12, 23]

print(list(filterfalse(lambda x: x < 10, data)))

data1 = [1, 2]
data2 = [3, 4]
print(list(chain(data1, data2)))