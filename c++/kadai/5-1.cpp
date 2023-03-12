#include<iostream>
using namespace std;

int main()
{
	int i, num1, num2, k;

	cout << "seisuuwonyuuryokusitekudasai" << endl;
	cin >> i;

	if(i % 2 == 0)
		cout << i << "haguuusuuudesu" << endl;
	else
		cout << i << "hakisuudesu" << endl;

	cout << "seisuuwofutatunyuuryokusitekudasai" << endl;
	cin >> num1 >> num2;

	if(num1 > num2)
		cout << num2 << "yori" << num1 << "nohoga" << "ookiiataidesu" << endl;
	else
		cout << num1 << "yori" << num2 << "nohoga" << "ookiiataidesu" << endl;

	cout << "'1~5'noseiisuuwonyuuryokusitekudasai" << endl;
	cin >> k;

	switch(k){
		case 1: cout << "seisekiha'1'desu.mottogannbarimashou" << endl; break;
		case 2: cout << "seisekiha'2'desu.mousukosigannbarimashou" << endl; break;
		case 3: cout << "seisekiha'3'desu.saraniuewomezasimashou" << endl; break;
		case 4: cout << "seisekiha'4'desu.taihennypokudekimasita" << endl; break;
		case 5: cout << "seisekiha'5'desu.taihennyuushuudesu" << endl; break;
	}

	return 0;
}
