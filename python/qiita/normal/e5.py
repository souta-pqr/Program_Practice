# @decorator
# def target_function():
#     pass

# def target_function():
#     pass

# target_function = decorator(target_function)

def log_decorator(func):
    def wrapper(*args, **kwargs):
        print(f'Function {func.__name__} was called with args: {args}, kwargs: {kwargs}')
        result = func(*args, **kwargs)
        print(f'Function {func.__name__} returned: {result}')
        return result
    return wrapper

@log_decorator
def add(a, b):
    return a + b

add(1, 2)