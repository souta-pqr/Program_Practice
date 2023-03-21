#include<iostream>
using namespace std;

class Car
{
	private:
		int num;
		double gas;
	public:
		int getNum(){return num;}
		double getGas(){return gas;}
		void show();
		void setNumgas(int n, double g);
};

void Car::show()
{
	cout << "The car's license plate number is " << num << "." << endl;
	cout << "Gasoline quantity " << gas << "." << endl;
}
void Car::setNumgas(int n, double g)
{
	if(g > 0 && g < 1000)
	{
		num = n;
		gas = g;
		cout << "I changed the number to " << num << " and the amount of the gasoline to " << gas << "." << endl;
	}
	else{
		cout << g << " is not the correct amount of gasoline." << endl;
		cout << "Gasoline quantity could not be changed." << endl;
	}
}

void buy(Car* pC);

int main()
{
	Car car1;

	car1.setNumgas(1234, 20.5);

	buy(&car1);

	return 0;
}

void buy(Car *pC)
{
	int n = pC->getNum();
	double g = pC->getGas();
	cout << "I bought a car with number " << n << " gasoline quantity " << g << "." << endl;
}

