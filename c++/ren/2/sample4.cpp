#include <iostream>

using namespace std;

int main() {
    int num;

    cout << "0=100を入力してください: ";
    cin >> num;

    if (num > 100) {
        cout << "no data" << endl;
    } else if (num >= 90) {
        cout << "秀" << endl;
    } else if (num >= 80) {
        cout << "優" << endl;
    } else if (num >= 70) {
        cout << "良" << endl;
    } else if (num >= 60) {
        cout << "可" << endl;
    } else {
        cout << "不可" << endl;
    }

    return 0;
}