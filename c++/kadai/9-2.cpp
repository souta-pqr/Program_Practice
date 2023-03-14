#include<iostream>
using namespace std;

int length(char* str)
{
	int i = 0;

	while(str[i]){
		i++;
	}

	return i;
}

int main()
{
	int a;
	char str[100];

	cout << "mojiretuwonyuuryokusitekudasai" << endl;
	cin >> str;

	a = length(str);
	cout << "mojiretunonagasaha" << a << "desu" << endl;

	return 0;
}
