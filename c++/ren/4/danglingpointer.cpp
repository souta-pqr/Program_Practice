#include <iostream>

// ダングリングポインタが発生する例
int* createDanglingPointer() {
    int local = 5; // ローカル変数
    return &local; // 関数終了後にlocalは消えるため危険
}

// メモリ解放後のダングリングポインタ
void dangerousOperation() {
    int* ptr = new int(5);
    delete ptr;
    // この時点でptrはダングリングポインタ
    *ptr = 10;
}

void safeOperation() {
    int* ptr = new int(5);
    delete ptr;
    ptr = nullptr; //nullptrを代入することでダングリングポインタを防ぐ

    // nullptrチェック
    if (ptr != nullptr) {
        *ptr = 10; // ptrがnullptrの場合，この処理は実行されない
    }
}

int main() {
    // ダングリングポインタの例
    int* danglingPtr = createDanglingPointer();
    // danglingPtrを使うと未定義動作になるのでコメントアウト
    // std::cout << *danglingPtr << std::endl;

    // メモリ解放後のダングリングポインタの例
    try {
        dangerousOperation();
    } catch (...) {
        std::cout << "Exception caught in dangerousOperation" << std::endl;
    }

    // 安全な操作の例
    safeOperation();

    return 0;
}