import types

def my_function():
    pass

if isinstance(my_function, types.FunctionType):
    print("my_function is a function")
else:
    print("my_function is not a function")

if isinstance(my_function, types.BuiltinFunctionType):
    print("my_function is a built-in function")