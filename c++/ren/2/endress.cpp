#include <iostream>

using namespace std;

int main() {

    for (int i = 1; i <= 10; i++) {
        cout << i << " ";
    }

    int i_1 = 1;
    while (i_1 <= 10) {
        cout << i_1 << " ";
        i_1++;
    }

    int i = 1;
    do {
        cout << i << " ";
        i++;
    } while (i <= 10);

    cout << endl;

    return 0;
}