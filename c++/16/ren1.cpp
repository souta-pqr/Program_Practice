#include<iostream>
using namespace std;

int main()
{
	for(int i=0; i<=4; i++){
		for(int j=1; j<=5; j++){
			cout.width(3);
			cout.fill('-');
			cout << i*5+j;
		}
	cout << endl;
	}

	return 0;
}
