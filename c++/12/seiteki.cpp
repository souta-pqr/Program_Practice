#include<iostream>
using namespace std;

class Car{
	private:
		int num;
		double gas;
	public:
		static int sum;
		Car();
		void setCar(int n, double g);
		static void showSum();
};

Car::Car()
{
	num = 0;
	gas = 0.0;
	sum++;
	cout << "車を作成しました" << endl;
}
void Car::setCar(int n, double g)
{
	num = n;
	gas = g;
	cout << "ナンバーを" << num << "ガソリン量を" << gas << "にしました" << endl;
}
void Car::showSum()
{
	cout << "車は全部で" << sum << "台あります" << endl;
}

int main()
{
	Car::showSum();

	Car car1;
	car1.setCar(1234, 34.3);

	Car::showSum();

	Car car2;
	car2.setCar(2323, 553.2);

	Car::showSum();

	return 0;
}
