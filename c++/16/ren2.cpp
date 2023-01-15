#include<iostream>
#include<fstream>
#include<iomanip>
using namespace std;

int main(int argc, char *argv[])
{
	if(argc != 2){
		cout << "パラメータの数が違います" << endl;
		return 1;
	}

	ifstream fin(argv[1]);
	if(!fin){
		cout << "ファイルをオープンできませんでした" << endl;
		return 1;
	}

	const int num = 8;
	int test[num];
	for(int i=0; i<num; i++){
		fin >> test[i];
	}
	int max = test[0];
	int min = test[0];
	for(int j=0; j<num; j++){
		if(max < test[j])
			max = test[j];
		if(min > test[j])
			min = test[j];
		cout << "No." << j+1 << setw(5) << test[j] << endl;
	}

	cout << "最高点は" << max << "です" << endl;
	cout << "最低点は" << min << "です" << endl;

	fin.close();

	return 0;
}
