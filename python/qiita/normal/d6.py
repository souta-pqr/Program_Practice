from itertools import zip_longest

numbers = [1, 2, 3, 4, 5]
letters = ['a', 'b', 'c']
print(list(zip_longest(numbers, letters, fillvalue='*')))

pairs = [(1, 'a'), (2, 'b'), (3, 'c')]
numbers, letters = zip(*pairs)
print(numbers)
print(letters)