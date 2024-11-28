#include <iostream>

using namespace std;

int main() {
    int a, b, c, num;

    cout << "3つの整数を入力してください" << endl;
    cout << "a: ";
    cin >> a;
    cout << "b: ";
    cin >> b;
    cout << "c: ";
    cin >> c;

    num = a;

    if (num < b) {
        num = b;
    }
    if (num < c) {
        num = c;
    }

    cout << "最大値は" << num << "です" << endl;

    return 0;
}