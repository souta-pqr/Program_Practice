#include "hoge.h"
#include <iostream>
using namespace std;

Hoge::Hoge()
{
	cout << "constructor" << endl;
}
Hoge::~Hoge()
{
	cout << "destructor" << endl;
}
void Hoge::foo()
{
	cout << "foomethod" << endl;
}
