from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3
    BLACK = 99

print(Color.RED)

color = Color.RED
if color == Color.RED:
    print("The color is red.")

color = Color(99)
print(color)