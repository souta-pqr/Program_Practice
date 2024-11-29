#include <iostream>
#include <string>
using namespace std;

int main() {
    string line;

    cout << "Enter a line of text: ";
    getline(cin, line);

    int number;
    cout << "Enter a number: ";
    cin >> number;
    cin.ignore(); // 残っている改行文字を無視

    cout << "Entered text: ";
    getline(cin, line);
}