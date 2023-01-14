#include<iostream>
#include<fstream>
using namespace std;

int main()
{
	ifstream fin("test1.txt");
	if(!fin){
		cout << "ファイルをオープンできませんでした" << endl;
		return 1;
	}

	char str1[16];
	char str2[16];
	fin >> str1 >> str2;
	cout << "ファイルに書き込まれている2つの文字列は" << endl;
	cout << str1 << "です" << endl;
	cout << str2 << "です" << endl;

	fin.close();
	return 0;
}
