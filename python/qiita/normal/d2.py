numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)

list1 = [1, 2, 3]
list2 = [10, 20, 30]
added = list(map(lambda x, y: x + y, list1, list2))
print(added)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)

products = [
    {'name': 'apple', 'price': 100},
    {'name': 'banana', 'price': 80},
    {'name': 'orange', 'price': 120}
]

affordable = list(filter(lambda x: x['price'] < 100, products))

lambda x: x if x > 0 else -x

