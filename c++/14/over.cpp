#include<iostream>
using namespace std;

class Car{
	private:
		int num;
		double gas;
	public:
		Car();
		Car(int n, double g);
};

class RacingCar : public Car{
	private:
		int course;
	public:
		RacingCar();
		RacingCar(int n, double g, int c);
};

Car::Car()
{
	num = 0;
	gas = 0.0;
	cout << "Created a car with license number " << num << " gasoline quantity " << gas << endl;
}
Car::Car(int n, double g)
{
	num = n;
	gas = g;
	cout << "Created a car with license number " << num << " gasoline quanttiy " << gas << endl;
}

RacingCar::RacingCar()
{
	course = 0;
	cout << "Created a Racingcar" << endl;
}
RacingCar::RacingCar(int n, double g, int c) : Car(n, g)
{
	course = c;
	cout << "Created a Racingcar with the course number " << course << endl;
}

int main()
{
	RacingCar rccar1(1234, 20.5, 5);

	return 0;
}
