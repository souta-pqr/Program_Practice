#include <stdio.h>

int main(void) {
    int suuji, total = 0;

    for (int i=1; i<=5; i++) {
        printf("科目%dの点数を入力して下さい。\n", i);
        scanf("%d", &suuji);
        total += suuji;
    }
    printf("合計点は %d 点です。\n", total);
    printf("平均点は %f 点です。\n", total/5.0);
}