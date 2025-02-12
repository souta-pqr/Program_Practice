import copy

original_list = [1, 2, 3, [4, 5, 6], 7, 8, 9]
shallow_copy = copy.copy(original_list)

shallow_copy[3][0] = 100

print(original_list)
print(shallow_copy)

deep_copy = copy.deepcopy(original_list)

deep_copy[3][0] = 400

print(original_list)
print(deep_copy)