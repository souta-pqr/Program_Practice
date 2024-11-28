# include <iostream>

using namespace std;

int main() {
    int n, sum=0;

    cout << "正の整数を入力して: ";
    cin >> n;

    for (int i=1; i<=n; i++) {
        sum += i;
    }

    cout << "1から" << n << "までの和は" << sum << "です。" << endl;

    return 0;
}