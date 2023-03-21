#include<iostream>
using namespace std;

struct Person
{
	int age;
	double weight;
	double height;
};

void aging(Person* P);

int main()
{
	Person pe;

	cout << "Please enter your age." << endl;
	cin >> pe.age;
	cout << "Please enter your weight." << endl;
	cin >> pe.weight;
	cout << "Please enter your stature." << endl;
	cin >> pe.height;

	cout << "age:" << pe.age << "weight:" << pe.weight << "stature:" << pe.height << "." << endl;
	cout << "One year has passed." << endl;

	aging(&pe);
	cout << "age:" << pe.age << "weight:" << pe.weight << "stature:" << pe.height << "." << endl;

	return 0;
}

void aging(Person* P)
{
	P->age += 1;
}
	
