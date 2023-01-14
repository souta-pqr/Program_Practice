#include<iostream>
using namespace std;

int main()
{
	cout.setf(ios::left,ios::adjustfield);
	for(int i=0; i<=5; i++){
		cout.width(5);
		cout.fill('-');
		cout << i;
	}
	cout << endl;

	cout.unsetf(ios::left);
	cout.setf(ios::right,ios::adjustfield);
	for(int j=0; j<=5; j++){
		cout.width(5);
		cout.fill('-');
		cout << j;
	}
	cout << endl;

	return 0;
}
