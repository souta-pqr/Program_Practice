from enum import Enum, auto

class AutoColor(Enum):
    RED = 1
    BLUE = 2
    GREEN = 3

print(AutoColor.RED.value)
print(AutoColor.GREEN.value)

print(AutoColor.RED.name)
print(AutoColor.GREEN.name)