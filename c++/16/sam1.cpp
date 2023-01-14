#include<iostream>
using namespace std;

int main()
{
	int i;
	double d;
	char str[100];

	cout << "整数値を入力してください" << endl;
	cin >> i;
	cout << "小数値を入力してください" << endl;
	cin >> d;
	cout << "文字列を入力してください" << endl;
	cin >> str;

	cout << "入力した整数値は" << i << "です" << endl;
	cout << "入力した小数値は" << d << "です" << endl;
	cout << "入力した文字列は" << str << "です" << endl;

	return 0;
}
