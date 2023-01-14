#include<iostream>
#include<vector>
using namespace std;

int main()
{
	int num;
	// vectorを利用します
	vector<int> vt;

	cout << "いくつ整数データを入力しますか" << endl;
	cin >> num;

	for(int i=0; i<num; i++){
		int data;
		cout << "整数を入力してください" << endl;
		cin >> data;
		vt.push_back(data);
	}

	cout << "を表示します" << endl;
	vector<int>::iterator it = vt.begin();
	while(it != vt.end()){
		cout << *it;
		cout << "-";
		it++;
	}
	cout << endl;
}
