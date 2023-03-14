#include<iostream>
using namespace std;

int main()
{
	int num;
	int *pT;

	cout << "nannninnnotesutonotennsuuwonyuuryokusitekudasai" << endl;
	cin >> num;

	pT = new int[num];
	cout << "ninnzuunotennsuuwonyuuryokusitekudasai" << endl;

	for(int i=0; i<num; i++)
	{
		cin >> pT[i];
	}

	for(int j=0; j<num; j++)
	{
		cout << j+1 << "bannmenohitonotennsuuha" << pT[j] << "desu" << endl;
	}

	delete[] pT;

	return 0;
}
