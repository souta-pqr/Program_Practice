class Car:
    def __init__(self, num, gas):
        self.num = num
        self.gas = gas
    
    def Getnum(self):
        return self.num
    
    def Getgas(self):
        return self.gas

car1 = Car(1234, 25.5)
car2 = Car(2345, 30.5)

print("ナンバーは" + str(car1.Getnum()) + "ガソリン量は" + str(car1.Getgas()) + "です．")
print("ナンバーは" + str(car2.Getnum()) + "ガソリン量は" + str(car2.Getgas()) + "です．")
