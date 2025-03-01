# ダック・タイピング
class Duck:
    def quack(self):
        print("Quack!")

class Person:
    def quack(self):
        print("I'm quacking like a duck!")

def make_it_quack(obj):
    obj.quack()

make_it_quack(Duck())
make_it_quack(Person())