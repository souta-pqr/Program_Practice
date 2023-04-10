#include<iostream>
#include<cstring>
using namespace std;

class Car{
	private:
		int num;
		double gas;
		char* pName;
	public:
		Car(const char* pN, int n, double g);
		~Car();
		Car(const Car& c);
		Car& operator=(const Car& c);
};

Car::Car(const char* pN, int n, double g)
{
	pName = new char[strlen(pN)+1];
	strcpy(pName, pN);
	num = n;
	gas = g;
	cout << pName << " is now created" << endl;
}
Car::~Car()
{
	cout << "Discard " << pName << endl;
	delete[] pName;
}
Car::Car(const Car& c)
{
	cout << "Initialize with " << c.pName << endl;
	pName = new char[strlen(c.pName) + strlen("'s copy1")+1];
	strcpy(pName, c.pName);
	strcat(pName, "'s copy1");
	num = c.num;
	gas = c.gas;
}
Car& Car::operator=(const Car& c)
{
	cout << "Assign " << c.pName << " to " << pName << endl;
	if(this != &c){
		pName = new char[strlen(c.pName)+strlen("'s copy2")+1];
		strcpy(pName, c.pName);
		strcat(pName, "'s copy2");
		num = c.num;
		gas = c.gas;
	}
	return *this;
}

int main()
{
	Car mycar("mycar", 1234, 25.5);

	Car car1 = mycar;

	Car car2("car2", 0, 0);
	car2 = mycar;

	return 0;
}
