#include<iostream>
using namespace std;

// poinntawotukautokurohakannsuuwosiyousitehikitugitaiataigaarutokiniookumotiirareru.

/*
void add(int *x1, int *x2, int a)
{
	*x1 += a;
	*x2 += a;
}
*/

void add(int& x1, int& x2, int a)
{
	x1 += a;
	x2 += a;
}

int main()
{
	int x1, x2, pls;

	cout << "'2'kamokunotennsuuwonyuuryokusitekudasai" << endl;
	cin >> x1 >> x2;

	cout << "kasannsurutennsuuwonyuuryokusitekudasai" << endl;
	cin >> pls;
	add(x1, x2, pls);

	cout << pls << "tennkasannsimasitanode" << endl;
	cout << "kamoku'1'ha" << x1 << "tenntonarimasita" << endl;
	cout << "kamoku'2'ha" << x2 << "tenntonarimasita" << endl;

	return 0;
}
