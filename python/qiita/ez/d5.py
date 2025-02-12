from functools import wraps

def decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@decorator
def say_hello(name):
    """Say hello to the user"""
    print(f"Hello, {name}")

say_hello("Alice")
print(say_hello.__name__)