#include<iostream>
#include"twostrings.h"
using namespace std;

int main()
{
	TwoStrings s;
	s.setString1("Hello");
	s.setString2("world");

	cout << "hitotumenomojiretuha" << s.getString1() << endl;
	cout << "futatumenomojiretuha" << s.getString2() << endl;
	cout << "futatunomojiretuwogouseisitamonoha" << s.getConnectedString() << endl;
	cout << "gouseisitamojiretunonagasaha" << s.getConnectedLength() << "moji" << endl;

	return 0;
}
