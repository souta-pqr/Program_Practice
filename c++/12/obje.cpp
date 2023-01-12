#include<iostream>
using namespace std;

class Car{
	private:
		int num;
		double gas;
	public:
		int getNum(){return num;}
		double getGas(){return gas;}
		void show();
		void setNumGas(int n, double g);
};

void Car::show()
{
	cout << "車のナンバーは" << num << "です" << endl;
	cout << "ガソリン量は" << gas << "です" << endl;
}
void Car::setNumGas(int n, double g)
{
	if(g > 0 && g < 1000){
		num = n;
		gas = g;
		cout << "ナンバーを" << num << "にガソリン量を" << gas << "にしました" << endl;
	}
	else{
		cout << g << "は正しいガソリン量ではありませんでした" << endl;
		cout << "ガソリン量は変更できませんでした" << endl;
	}
}

void buy(Car c);

int main()
{
	Car car1;

	car1.setNumGas(1234, 33.2);

	buy(car1);

	return 0;
}

void buy(Car c)
{
	int n = c.getNum();
	double g = c.getGas();

	cout << "ナンバー" << n << "ガソリン量" << g << "の車を購入しました" << endl;
}
