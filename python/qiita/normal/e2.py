def print_args(*args):
    for arg in args:
        print(arg)

print_args(1, 2, 3, 4, 5)
print_args('a', 'b', 'c')
print_args('1', 1, [1, 2, 3], {'name': 'Alice'})

def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f'{key}: {value}')

print_kwargs(name='Alice', age=33, city='New York')
print_kwargs(title='Python', author='Guido van Rossum')

def combined_example(*args, **kwargs):
    print(args)
    print(kwargs)

combined_example(1, 2, 3, name='Alice', age=33)

def my_decorator(func):
    def wrapper(*args, **kwargs):
        print('Something is happening before the function is called.')
        result = func(*args, **kwargs)
        print('Something is happening after the function is called.')
        return result
    return wrapper

@my_decorator
def greet(name, greeting='Hello'):
    return f'{greeting}, {name}!'

print(greet('Alice'))