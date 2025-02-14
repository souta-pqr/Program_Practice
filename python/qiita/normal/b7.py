from itertools import count
from itertools import cycle
from itertools import repeat

for i in count(10, 2):
    print(i)

colors = ["red", "green", "blue"]
for color in cycle(colors):
    print(color)

for item in repeat("Python", 5):
    print(item)