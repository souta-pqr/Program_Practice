#include <iostream>

using namespace std;

int main() {
    double r;

    cout << "円の半径を入力してください: ";
    cin >> r;
    cout << "円の面積: " << 3.14 * r * r << endl;
    cout << "円周の長さ: " << 2 * 3.14 * r << endl;

    return 0;
}