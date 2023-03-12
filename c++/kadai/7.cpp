#include<iostream>	
using namespace std;

//inline int square(int x){return x*x;}
//inline double square(double x){return x*x;}

template <class T>T square(T x)
{
	return x*x;
}

int main()
{
	int num, ans;
	double num1, ans1;

	cout << "seisuuwonyuuryokusitekudasai" << endl;
	cin >> num;
	ans = square(num);
	cout << num << "no'2'jyouha" << ans << "desu" << endl;

	cout << "shousuuuwonyuuryokusitekudasai" << endl;
	cin >> num1;
	ans1 = square(num1);
	cout << num1 << "no'2'jyouha" << ans1 << "desu" << endl;

	return 0;
}
