#include<iostream>
using namespace std;

// Arrayクラステンプレート
template <class T>
class Array{
	private:
		T data[5];
	public:
		void setData(int num, T d);
		T getData(int num);
};

template <class T>
void Array<T>::setData(int num, T d)
{
	if(num < 0 || num > 4)
		cout << "配列の範囲を超えています" << endl;
	else
		data[num] = d;
}
template <class T>
T Array<T>::getData(int num)
{
	if(num < 0 || num > 4){
		cout << "配列の範囲を超えています" << endl;
		return data[0];
	}
	else
		return data[num];
}

int main()
{
	cout << "int型の配列を作成します" << endl;
	Array<int> i_array;
	i_array.setData(0, 80);
	i_array.setData(1, 60);
	i_array.setData(2, 48);
	i_array.setData(3, 49);
	i_array.setData(4, 57);

	for(int i=0; i<5; i++)
		cout << i_array.getData(i) << endl;

	cout << "double型の配列を作成します" << endl;
	Array<double> d_array;
	d_array.setData(0, 32.3);
	d_array.setData(1, 34.5);
	d_array.setData(2, 10.5);
	d_array.setData(3, 903.22);
	d_array.setData(4,33.3);

	for(int j=0; j<5; j++)
		cout << d_array.getData(j) << endl;

	return 0;
}
