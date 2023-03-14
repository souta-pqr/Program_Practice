#include<iostream>
using namespace std;

int count(char str[], char ch)
{
	int i=0, c=0;

	while(str[i])
	{
		if(str[i] == ch)
			c++;
		i++;
	}

	return c;
}

int main()
{
	int ans;
	char str[100], ch;

	cout << "mojiretuwonyuuryokusitekudasai" << endl;
	cin >> str;
	cout << "mojiretukarasagasumojiwonyuuryokusitekudasai" << endl;
	cin >> ch;
	ans = count(str, ch);
	cout << str << "nonakani" << ch << "hazennbude" << ans << "koarimasu" << endl;

	return 0;
}
