#include<iostream>
using namespace std;

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
	if(num<0 || num>4)
		cout << "It is beyond the scope of the array." << endl;
	else
		data[num] = d;
}
template <class T>
T Array<T>::getData(int num)
{
	if(num<0 || num>4)
	{
		cout << "It is beyond the scope of the array." << endl;
		return data[0];
	}
	else
		return data[num];
}

int main()
{
	cout << "Creates an array of type int." << endl;
	Array<int> i_array;
	i_array.setData(0, 80);
	i_array.setData(1,60);
	i_array.setData(2, 58);
	i_array.setData(3, 77);
	i_array.setData(4, 57);

	for(int i=0; i<5; i++)
		cout << i_array.getData(i) << endl;

	cout << "Creates an array of type double." << endl;
	Array<double> d_array;
	d_array.setData(0, 35.5);
	d_array.setData(1, 45.6);
	d_array.setData(2, 26.7);
	d_array.setData(3, 76.2);
	d_array.setData(4, 85.5);

	for(int j=0; j<5; j++)
		cout << d_array.getData(j) << endl;

	return 0;
}
