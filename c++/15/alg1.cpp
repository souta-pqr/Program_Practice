#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main()
{
	vector<int> vt;
	for(int i=0; i<10; i++)
		vt.push_back(i);

	cout << "Before reordering, it is ";
	vector<int>::iterator it = vt.begin();
	while(it != vt.end())
	{
		cout << *it;
		it++;
	}
	cout << "." << endl;

	cout << "In reverse order, it is ";
	reverse(vt.begin(), vt.end());
	it = vt.begin();
	while(it != vt.end())
	{
		cout << *it;
		it++;
	}
	cout << "." << endl;

	cout << "After rearrangement, it is ";
	sort(vt.begin(), vt.end());
	it = vt.begin();
	while(it != vt.end())
	{
		cout << *it;
		it++;
	}
	cout << "." << endl;
}
