#include<iostream>
using namespace std;

class Vehicle{
	protected:
		int speed;
	public:
		void setSpeed(int s);
		virtual void show() = 0;
};

class Car : public Vehicle{
	private:
		int num;
		double gas;
	public:
		Car(int n, double g);
		void show();
};

class Plane : public Vehicle{
	private:
		int flight;
	public:
		Plane(int f);
		void show();
};

void Vehicle::setSpeed(int s)
{
	speed = s;
	cout << "Speed is set to " << speed << endl;
}

Car::Car(int n, double g)
{
	num = n;
	gas = g;
	cout << "Created a car with the license plate number " << num << " gasoline quantity " << gas << endl;
}
void Car::show()
{
	cout << "The car's plate number is " << num << endl;
	cout << "Gasoline volume is in " << gas << endl;
	cout << "Speed is " << speed << endl;
}

Plane::Plane(int f)
{
	flight = f;
	cout << "Created a plane for flight " << flight << endl;

}
void Plane::show()
{
	cout << "Airplane flights are " << flight << endl;
	cout << "Speed is " << speed << endl;
}

int main()
{
	Vehicle* pVc[2];

	Car car1(1234, 20.5);
	pVc[0] = &car1;
	pVc[0] -> setSpeed(60);

	Plane pln1(232);
	pVc[1] = &pln1;
	pVc[1] -> setSpeed(500);

	for(int i=0; i<2; i++)
		pVc[i] -> show();

	return 0;
}
