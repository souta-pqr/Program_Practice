#include<iostream>
using namespace std;

int main()
{
	double pi = 3.141592;
	int num;

	cout << "円周率を出力します" << endl;
	cout << "有効桁何桁で出力しますか(1～7)" << endl;
	cin >> num;

	cout.precision(num);

	cout << "円周率は" << pi <<"です" << endl;

	return 0;
}
