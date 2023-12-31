#include <stdio.h>

int main(void) {
    int suuji, sum = 0;

    printf("テストの点数を入力してください。(0で終了)\n");

    while (1) {
        scanf("%d", &suuji);

        if (suuji == 0) {
            break;
        }

        sum += suuji;
    }

    printf("合計点は%d点です。\n", sum);

    return 0;
}