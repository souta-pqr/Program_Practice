#include<iostream>
#include<vector>
using namespace std;

int main()
{
	int num;
	vector<int> vt;

	cout << "How many integer data do you want to enter?" << endl;
	cin >> num;

	for(int i=0; i<num; i++)
	{
		int data;
		cout << "Please enter an integer." << endl;
		cin >> data;
		vt.push_back(data);
	}

	cout << "Display." << endl;
	vector<int>::iterator it = vt.begin();
	while(it != vt.end())
	{
		cout << *it;
		cout << "-";
		it++;
	}
	cout << "\n";

	return 0;
}

