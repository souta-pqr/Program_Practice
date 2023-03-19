#include"car.h"
#include<iostream>
using namespace std;

CCar::CCar() : m_fuel(0), m_migtation(0)
{
	cout << "CCarobjectseisei" << endl;
}
CCar::~CCar()
{
	cout << "CCarobjecthaki" << endl;
}
void CCar::move()
{
	if(m_fuel >= 0)
	{
		m_migtation++;
		m_fuel--;
	}
	cout << "idoukyori:" << m_migtation << endl;
	cout << "nennryou" << m_fuel << endl;
}
void CCar::supply(int fuel)
{
	if(fuel > 0){
		m_fuel += fuel;
	}
	cout << "nennryou" << m_fuel << endl;
}
