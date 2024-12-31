import weakref

class MyClass:
    def __del__(self):
        print("MyClass instance is deleted")


obj = MyClass()

weak_obj = weakref.ref(obj)

print(weak_obj())

del obj

print(weak_obj())