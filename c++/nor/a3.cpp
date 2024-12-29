#include <iostream>

// int, double型の数値を2乗する関数のインライン関数の定義
inline int square(int x) { return x * x; }
inline double square(double x) { return x * x; }

int main() {
    int a;
    double b;

    std::cout << "整数値を入力してください: ";
    std::cin >> a;
    std::cout << a << "の2乗は" << square(a) << "です。\n";

    std::cout << "実数値を入力してください: ";
    std::cin >> b;
    std::cout << b << "の2乗は" << square(b) << "です。\n";

    return 0;
}