#include<iostream>
using namespace std;

double avg(int *pT);

int main()
{
	int test[5];
	cout << "'5'ninnnotesutonotennsuuwonyuuryokusitekudasai" << endl;
	for(int i=0; i<5; i++)
	{
		cin >> test[i];
	}

	double ans = avg(test);
	cout << "'5'ninnnoheikinntennha" << ans << "tenndesu" << endl;

	return 0;
}

double avg(int *pT)
{
	double sum = 0;
	for(int i=0; i<5; i++)
	{
		sum += *(pT+i);
	}
	return sum/5;
}
