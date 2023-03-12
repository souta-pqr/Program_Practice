#include<iostream>
using namespace std;

int main()
{
	int j, sum=0;

	cout << "'1~10'madenoguusuuwoshuturyokusitekudasai" << endl;

	for(int i=2; i<=10; i+=2)
		cout << i << endl;

	cout << "tesutonotennsuuwonyuuryokusitekudasai'(0deend)'" << endl;

	do{
		cin >> j;
		sum += j;
	}while(j);

	cout << "tesutonogoukeitennha" << j << "tenndesu" << endl;

	for(int k=1; k<=5; k++){
		for (int m=0; m<k; m++){
			cout << '*';
		}
		cout << endl;
	}

	return 0;
}
