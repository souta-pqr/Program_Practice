#include <iostream>

// namespace 書くのだるくね？
// 関数宣言しとくのと，下にmain()書くのどっちがいいんだろう，わかりやすさからすると，関数宣言しといて，main()が上にあるとみやすい気がする．（機能的な良さがあると思うが，わからず）．

// 配列を昇順にソートする関数
void sortArray(int arr[], int n) {
    for (int i = 0; i < n - 1; ++i) {
        for (int j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}

// 配列の要素を表示する関数
void displayArray(const int arr[], int n) {
    for (int i = 0; i < n; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    int n, input;

    std::cout << "配列の要素数を入力してください: ";
    std::cin >> n;

    int arr[n];

    std::cout << "配列の要素を入力してください: ";
    for (int i = 0; i < n; ++i) {
        std::cin >> arr[i];
    }

    sortArray(arr, n);
    std::cout << "ソートされた配列: ";
    displayArray(arr, n);

    return 0;
}