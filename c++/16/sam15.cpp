#include<fstream>
#include<iostream>
using namespace std;

int main(int argc, char *argv[])
{
	if(argc != 2){
		cout << "パラメ―タの数が違うよ" << endl;
		return 1;
	}

	ifstream fin(argv[1]);
	if(!fin){
		cout << "ファイルをオープンできませんでした" << endl;
		return 1;
	}

	char ch;
	fin.get(ch);

	while(!fin.eof()){
		cout.put(ch);
		fin.get(ch);
	}

	fin.close();

	return 0;
}
	
