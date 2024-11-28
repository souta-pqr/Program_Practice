#include <iostream>

using namespace std;

int main() {
    int n;

    cout << "配列のサイズを入力してください: ";
    cin >> n;

    int a[n];

    cout << "配列の要素を入力してください ↓" << endl;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    cout << "偶数の要素は以下の通りです: ";
    for (int i = 0; i < n; i++) {
        if (a[i] % 2 == 0) {
            cout << a[i] << " ";
        }
    }

    cout << endl;

    return 0;
}