#include<iostream>
#include"minmax.h"
using namespace std;

int main()
{
	MinMax m;
	int a = 4;
	int b = 2;
	int c = 7;
	cout << a << "to" << b << "to" << c << "nouti,saidainomonoha" << m.max(a,b,c) << endl;
	cout << a << "to" << b << "to" << c << "nouti,saishounomonoha" << m.min(a,b,c) << endl;

	return 0;
}
