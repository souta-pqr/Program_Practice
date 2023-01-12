#include <iostream>
using namespace std;

// Carクラスの宣言
class Car{
	private:
		int num;
		double gas;
	public:
		void show();
		void setNumGas(int n, double g);
};

// Carクラスメンバ関数の定義
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
		cout << g << "は正しいガソリン量ではありませんでした。" << endl;
		cout << "ガソリン量を変更できませんでした" << endl;
	}
}

int main()
{
	Car car1;

	// このようなアクセスはできなくなります
	// car1.num = 2122
	// car1.gas = 33.44

	car1.setNumGas(122, 43.3);
	car1.show();

	cout << "正しくないガソリン量を入れてみます。。。" << endl;
	car1.setNumGas(1234, 3333);
	car1.show();

	return 0;
} 
