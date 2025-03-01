from typing import Protocol

class Quackable(Protocol):
    def quack(self) -> None:
        ...

class Duck:
    def quack(self) -> None:
        print("Quack!")

class Person:
    def quack(self) -> None:
        print("I'm quacking like a duck!")

def make_it_quack(obj: Quackable):
    obj.quack()

make_it_quack(Duck())
make_it_quack(Person())