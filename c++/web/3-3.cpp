#include<iostream>
#include<string>
using namespace std;

int main()
{
	string s;
	s = "This is a";
	s.append(" pen.");
	cout << s << endl;
	cout << "mojiretunonagasa:" << s.length() << endl;
	printf("char*:%s\n", s.c_str());
	return 0;
}
