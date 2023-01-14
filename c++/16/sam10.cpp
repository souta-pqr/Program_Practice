#include<iostream>
#include<fstream>
using namespace std;

int main()
{
	ofstream fout("test0.txt");
	if(!fout){
		cout << "ファイルをオープンできませんでした" << endl;
		return 1;
	}
	else
		cout << "ファイルをオープンしました" << endl;

	fout.close();
	cout << "ファイルをクローズしました" << endl;

	return 0;
}
