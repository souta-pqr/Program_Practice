from collections import defaultdict

text = "apple orange apple banana banana apple"

count_dict = defaultdict(int)

for word in text.split():
    count_dict[word] += 1

print(count_dict) # defaultdict(<class 'int'>, {'apple': 3, 'orange': 1, 'banana': 2})