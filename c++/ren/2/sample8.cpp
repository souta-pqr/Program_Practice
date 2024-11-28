#include <iostream>

using namespace std;

int main() {
    int num[5];

    cout << "５つの整数を入力してください" << endl;

    for (int i = 0; i < 5; i++) {
        cin >> num[i];
    }

    // 配列の要素を逆順に表示
    cout << "配列の要素を逆順に表示します: ";
    for (int i = 4; i >= 0; i--) {
        cout << num[i] << " ";
    }
    cout << endl;

    // 配列の要素の平均値を求める
    int sum = 0;
    for (int i = 0; i < 5; i++) {
        sum += num[i];
    }
    double average = static_cast<double>(sum) / 5;
    cout << "配列の要素の平均値: " << average << endl;

    // 最大値と最小値を求める
    int max = num[0];
    int min = num[0];
    for (int i = 1; i < 5; i++) {
        if (num[i] > max) {
            max = num[i];
        }
        if (num[i] < min) {
            min = num[i];
        }
    }
    cout << "最大値: " << max << endl;
    cout << "最小値: " << min << endl;

    return 0;
}