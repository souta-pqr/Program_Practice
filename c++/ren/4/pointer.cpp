#include <iostream>
using namespace std;

int main() {

    int x = 10;
    int *ptr = &x; //xのアドレスを保持するポインタ

    cout << x << endl; //10
    cout << &x << endl; //xのアドレス
    cout << ptr << endl; //xのアドレス
    cout << *ptr << endl; //10
    cout << &ptr << endl; //ptrのアドレス

    *ptr = 20; //xの値を20に変更
    cout << x << endl; //20
}