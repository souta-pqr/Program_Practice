class Evil:
	def __new__(cls, *args):
		return 1

evil = Evil()
isinstance(evil, Evil)

print(evil)

class Myclass(Evil):
	def print_class(self):
		print("Myclass")

my = Myclass()

print(my)
print(my.print_class())
