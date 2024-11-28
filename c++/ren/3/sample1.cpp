#include <iostream>

using namespace std;

bool check_sosuu(int n);
void print_sosuu(int n);

int main() {
    int n;
    cout << "1以上100以下の整数を入力してください" << endl;
    cin >> n;

    print_sosuu(n);

    return 0;
}

bool check_sosuu(int n) {
    if (n < 2) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (int i = 3; i * i <= n; i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}

void print_sosuu(int n) {
    if (n >= 1 && n <= 100) {
        cout << "素数一覧" << endl;
        for (int i = 2; i <= n; i++) {
            if (check_sosuu(i)) {
                cout << i << " ";
            }
        }
    } else {
        cout << "入力が範囲外です。" << endl;
    }
    cout << endl;
}