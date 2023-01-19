nums = ["one", "two", "three"]

filtered = filter(lambda x: len(x) == 3, nums)
print(list(filtered))
