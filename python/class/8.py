class Car:
	def __init__(self, number, gasoline):
		self.num = number
		self.gas = gasoline

	def numGet(self):
		return self.num

	def gasGet(self):
		return self.gas

class Excar(Car):
	def __init__(self, nm, gs, ds):
		super().__init__(nm, gs)

		self.dsta = ds

	def numGet(self):
		return self.num + self.num

	def getDstance(self):
		return self.dsta

car1 = Car(1234, 25.5)
car2 = Car(2345, 30.5)

print("Number is " + str(car1.numGet()) + " gasoline is " + str(car1.gasGet()) + ".")
print("Number is " + str(car2.numGet()) + " gasoline is " + str(car2.gasGet()) + ".")

Excar1 = Excar(1256, 32.3, 544)
print("Number is " + str(Excar1.numGet()) + " distance is " + str(Excar1.getDstance()) + ".")
