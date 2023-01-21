x = ["1", "4", 3, "1", 1]

#　各要素をint型の値として比較
print(sorted(x, key=lambda v: int(v)))
