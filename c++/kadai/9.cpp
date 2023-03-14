#include<iostream>
using namespace std;

int max(int x[])
{
	int i, ans;
	ans = x[0];

	for(i=1; i<5; i++)
	{
		if(ans < x[i])
			ans = x[i];
	}

	return ans;
}

int main()
{
	int i, x[5], ans;

	cout << "testnotennsuuwonyuuryokusitekudasai" << endl;
	for(i=0; i<=4; i++)
		cin >> x[i];

	ans = max(x);
	cout << "saikoutennha" << ans << "tenndesu" << endl;

	return 0;
}
