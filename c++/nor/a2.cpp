#include <iostream>
using namespace std;

//int, double型の数値を2乗する関数の定義
int square(int x) {
    return x * x;
}

double square(double x) {
    return x * x;
}

int main() {
    // int, double型の変数
    int a;
    double b;

    // 入力
    cout << "整数を入力してください: ";
    cin >> a;
    cout << "実数を入力してください: ";
    cin >> b;

    // 出力
    cout << a << "の2乗は" << square(a) << "です" << endl;
    cout << b << "の2乗は" << square(b) << "です" << endl;

    return 0;
}