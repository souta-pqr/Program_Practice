void valuePass(int x) {
    x = 100; // 元の変数は変更されない
}

void referancePass(int &x) {
    x = 100; // 元の変数が変更される
}

void constRefencePass(const int &x) {
    // x = 100; // コンパイルエラー
    cout << x;
}

int main() {
    int num = 10;

    valuePass(num);
    referancePass(num);

    // 大きな構造体を渡す場合
    struct LargeStruct {
        int data[1000];
    };

    void processStruct(const LargeStruct &s) {
        //処理
    }

    return 0;
}