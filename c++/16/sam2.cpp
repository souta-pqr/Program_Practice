#include<iostream>
using namespace std;

int main()
{
	char ch;

	cout << "文字を続けて入力してください" << endl;

	while(cin.get(ch)){
		cout.put(ch);
	}

	return 0;
}
