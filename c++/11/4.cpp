#include<iostream>
using namespace std;

struct Car
{
	int num;
	double gas;
};

void show(Car c);

int main()
{
	Car car1 = {0, 0.0};

	cout << "numberwonyuuryokusitekudasai" << endl;
	cin >> car1.num;
	cout << "gasorinwonyuuryokusitekudasai" << endl;
	cin >> car1.gas;

	show(car1);

	return 0;
}

void show(Car c)
{
	cout << "kurumanonumberha" << c.num << "gasorinnryouha" << c.gas << "desu" << endl;
}
