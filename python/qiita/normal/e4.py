numbers = [1, 2, 3]
print(*numbers)

list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = [*list1, *list2]

defaults = {'host': 'localhost', 'port': 8000}
config = {**defaults, 'port': 9000}

# 名前の慣例
# argsとkwargsは慣例的な名前（他の名前のも行けるが，argsとkwargsが一般的）