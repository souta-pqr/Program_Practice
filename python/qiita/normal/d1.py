def add(x, y):
    return x + y

add_lambda = lambda x, y: x + y

print(add(5, 3))
print(add_lambda(5, 3))

double = lambda x: x * 2
print(double(5))

upper = lambda s: s.upper()
print(upper('hello'))

pairs = [(1, 'one'), (2, 'two'), (3, 'three')]
sorted_pairs = sorted(pairs, key= lambda pair: pair[1])
print(sorted_pairs)

items = [{'name': 'Apple', 'price': 100},
         {'name': 'Banana', 'price': 80}]

sorted_items = sorted(items, key=lambda x: x['price'])