#ifndef _CALCULATIONS_H_
#define _CALCULATIONS_H_

#include<iostream>
#include<string>
using namespace std;

class Calculation{
private:
	int m_number1;
	int m_number2;
public:
	void setNumber1(int n);
	void setNumber2(int n);
	int getNumber1();
	int getNumber2();
	int add();
	int sub();
};

#endif // _CALCULATIONS_H_
