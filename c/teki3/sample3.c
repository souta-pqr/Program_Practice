// 問題3: 配列の要素の合計を計算するプログラムを作成してください。

#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    int a[n];
    int sum = 0;
    for (int i = 0; i < n; i++) {
        scanf("%d", &a[i]);
        sum += a[i];
    }

    printf("%d\n", sum);

    return 0;
}