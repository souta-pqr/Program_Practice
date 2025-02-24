def add_greeting(cls):
    cls.greet = lambda self: f'Hello, {self.name}!'
    return cls

@add_greeting
class Person:
    def __init__(self, name):
        self.name = name
    
p = Person('John')
print(p.greet())  # Hello, John!
