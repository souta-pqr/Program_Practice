#include<fstream>
#include<iostream>
#include<iomanip>
using namespace std;

int main()
{
	ofstream fout("test2.txt");
	if(!fout){
		cout << "ファイルをオープンできませんでした" << endl;
		return 1;
	}

	const int num = 5;
	int test[num];
	cout << num << "人の点数を入力してください" << endl;
	for(int j=0; j<num; j++){
		cin >> test[j];
	}

	for(int i=0; i<num; i++)
		fout << "No." << i+1 << setw(5) << test[i] << endl;

	fout.close();

	return 0;
}
