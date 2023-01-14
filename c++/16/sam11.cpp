#include<fstream>
#include<iostream>
using namespace std;

int main()
{
	ofstream fout("test1.txt");
	if(!fout){
		cout << "ファイルをオープンできませんでした" << endl;
		return 1;
	}
	else
		cout << "ファイルをオープンしました" << endl;

	fout << "Hello" << endl;
	fout << "Goodbye" << endl;
	cout << "ファイルに書き込みました" << endl;

	fout.close();
	cout << "ファイルをクローズしました" << endl;
	return 0;
}
