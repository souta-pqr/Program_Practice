import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **)

# def decorator(func):
#     def wrapper(*args, **kwargs):
#         print('Before the function call')
#         result = func(*args, **kwargs)
#         print('After the function call')
#         return result
#     return wrapper

