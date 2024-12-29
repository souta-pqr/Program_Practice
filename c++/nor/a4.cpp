#include <iostream>
using namespace std;

//与えられた型の数値を2乗する関数テンプレート
template <typename T>
T square(T x) {
    return x * x;
}

int main() {
    int a;
    double b;

    cout << "整数を入力してください: ";
    cin >> a;
    cout << "入力された整数の2乗は" << square(a) << "です．" << endl;

    cout << "小数を入力してください: ";
    cin >> b;
    cout << "入力された実数の2乗は" << square(b) << "です．" << endl;

    return 0;
}