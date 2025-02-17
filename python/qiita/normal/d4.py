zipped = zip(range(3), ['a', 'b', 'c'])
print(list(zipped))
print(list(zipped)) # zipped is now empty

numbers = [1, 2, 3, 4, 5]
letters = ['a', 'b', 'c']
print(list(zip(numbers, letters)))

keys = ['name', 'age', 'city']
values = ['Alice', 25, 'New York']
user_dict = dict(zip(keys, values))
print(user_dict)

names = ['Alice', 'Bob', 'Charlie']
ages = [25, 30, 35]

for name, age in zip(names, ages):
    print(f'{name} is {age} years old')
