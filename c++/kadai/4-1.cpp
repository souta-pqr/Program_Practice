#include<iostream>
using namespace std;

int main()
{
	int ta, te;
	int n1, n2, n3, n4, n5, sum=0;

	cout << 0-4 << endl;
	cout << 3.14*2 << endl;
	cout << (double)5/3 << endl;
	cout << 30%7 << endl;
	cout << ((double)7+32)/5 << endl;

	cout << "sannkakkeinotakasawonyuuryokusitekudasai" << endl;
	cin >> ta;
	cout << "sannkakkeinoteihennwonyuuryokusitekudasai" << endl;
	cin >> te;
	cout << "sannkakkeinomennsekiha" << ((double)ta*te)/2 << endl;

	cout << "kamoku'1'notennsuuwonyuuryokusitekudasai" << endl;
	cin >> n1;
	cout << "kamoku'2'notennsuuwonyuuryokusitekudasai" << endl;
	cin >> n2;
	cout << "kamoku'3'notennsuuwonyuuryokusitekudasai" << endl;
	cin >> n3;
	cout << "kamoku'4'notennsuuwonyuuryokusitekudasai" << endl;
	cin >> n4;
	cout << "kamoku'5'notennsuuwonyuuryokusitekudasai" << endl;
	cin >> n5;
	sum = n1+n2+n3+n4+n5;
	cout << "'5'kamokunogoukeitennsuuha" << sum << "tenndesu" << endl;
	cout << "'5'kamokunoheikinntennha" << (double)sum/5 << "tenndesu" << endl;

	return 0;
}
