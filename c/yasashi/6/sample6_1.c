#include <stdio.h>

int main(void) {
    int suuji;

    printf("1～10の偶数を出力します。\n");

    for (suuji = 2; suuji <= 10; suuji += 2) {
        printf("%d\n", suuji);
    }

    return 0;
}