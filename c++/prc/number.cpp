#include"number.h"
#include<iostream>
using namespace std;

Number::Number() : a(0), b(0)
{
	cout << "Numberconnsutarakutawoseisei" << endl;
}
void Number::setNumbers(int n1, int n2)
{
	a = n1;
	b = n2;
}
int Number::getAdd()
{
	return a+b;
}
