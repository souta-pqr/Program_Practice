#include<iostream>
using namespace std;

class Point
{
	private:
		int x;
		int y;
	public:
		void setX(int a);
		void setY(int b);
		int getX(){return x;}
		int getY(){return y;}
};

void Point::setX(int a)
{
	if(a>0 && a<10)
		x = a;
	else
		x = 0;
}
void Point::setY(int b)
{
	if(b>0 && b<10)
		y = b;
	else
		y = 0;
}

int main()
{
	Point p;
	int x, y;

	cout << "Please enter x-coordinate." << endl;
	cin >> x;
	cout << "Please enter y-coordinate." << endl;
	cin >> y;

	p.setX(x);
	p.setY(y);

	cout << "coordinates are" << " (" << p.getX() << "," << p.getY() << ")." << endl;

	return 0;
}	
