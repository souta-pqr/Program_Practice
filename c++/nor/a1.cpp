#include <iostream>
using namespace std;

void square(int &x) {
    cin >> x;
    x = x * x;
}

int main() {
    int a;
    cout << "整数を入力してください．" << endl;

    square(a);
    cout << "その数の2乗は" << a << "です．" << endl;
}