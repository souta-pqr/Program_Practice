#ifndef _CAR_H_
#define _CAR_H

class CCar
{
public:
	CCar();
	~CCar();
	void move();
	void supply(int fuel);
private:
	int m_fuel;
	int m_migtation;
};

#endif // _CAR_H_
