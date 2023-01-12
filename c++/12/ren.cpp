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
	if(x >= 0 && x <= 10)
		x = a;
	else
		cout << "範囲内に設定してください" << endl;
}
void Point::setY(int b)
{
	if(y >= 0 && y <= 10)
		y = b;
	else
		cout << "範囲内に設定してください" << endl;
}

int main()
{
	int x, y;
	Point p;

	cout << "x座標を入力してください" << endl;
	cin >> x;

	cout << "y座標を入力してください" << endl;
	cin >> y;

	p.setX(x);	
	p.setY(y);

	cout << "座標は（" << p.getX() << "," << p.getY() << "）です" << endl;

	return 0;
}
