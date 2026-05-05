d = {"a": 1, "b": 2}
print("a" in d)
print(len(d))

inv = {v: k for k, v in d.items()}
print(inv)
