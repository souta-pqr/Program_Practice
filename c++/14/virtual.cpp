#include<iostream>
using namespace std;

class Car{
	protected:
		int num;
		double gas;
	public:
		Car();
		void setCar(int n, double g);
		virtual void show();
};

class RacingCar : public Car{
	private:
		int course;
	public:
		RacingCar();
		void setCourse(int c);
		void show();
};

Car::Car()
{
	num = 0;
	gas = 0.0;
	cout << "Created a car" << endl;
}
void Car::setCar(int n, double g)
{
	num = n;
	gas = g;
	cout << "I set the number to " << num << " and the amount of the gasoline to " << gas << endl;
}
void Car::show()
{
	cout << "The car's license plate number " << num << endl;
	cout << "Casoline quantity is " << gas << endl;
}

RacingCar::RacingCar()
{
	course = 0;
	cout << "created a Racingcar" << endl;
}
void RacingCar::setCourse(int c)
{
	course = c;
	cout << "Course number is set to " << course << endl;
}
void RacingCar::show()
{
	cout << "The racingvcar's license plate number " << num << endl;
	cout << "Gasoline quantity is " << gas << endl;
	cout << "Course number is " << course << endl;
}

int main()
{
	Car* pCars[2];

	Car car1;
	RacingCar rccar1;

	pCars[0] = &car1;
	pCars[0] -> setCar(1234, 20.5);

	pCars[1] = &rccar1;
	pCars[1] -> setCar(4765, 30.5);

	for(int i=0; i<2; i++)
		pCars[i] -> show();

	return 0;
}
