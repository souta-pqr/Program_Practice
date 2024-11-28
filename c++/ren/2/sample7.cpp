#include <iostream>

using namespace std;

int main() {
    int n, sum=1;

    cout << "整数を入力して: ";
    cin >> n;

    for (int i=n; i>0; i--) {
        sum *= i;
    }

    cout << "階乗は" << sum << "です。" << endl;

    return 0;
}