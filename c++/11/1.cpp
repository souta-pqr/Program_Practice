#include<iostream>
using namespace std;

struct Person
{
	int age;
	double weight;
	double height;
};

int main()
{
	Person pe1, pe2;

	cout << "Please enter your age." << endl;
	cin >> pe1.age;
	cout << "Please enter your body weight." << endl;
	cin >> pe1.weight;
	cout << "Please enter your stature." << endl;
	cin >> pe1.height;

	cout << "Please enter your age." << endl;
	cin >> pe2.age;
	cout << "Please enter body weight." << endl;
	cin >> pe2.weight;
	cout << "Please enter your stature." << endl;
	cin >> pe2.height;

	cout << "age:" << pe1.age << "weight:" << pe1.weight << "stature:" << pe1.height << endl;
	cout << "age:" << pe2.age << "weight:" << pe2.weight << "stature:" << pe2.height << endl;

	return 0;
}
