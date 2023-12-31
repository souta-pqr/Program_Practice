#include <stdio.h>

int main(void) {
    int suuji;

    printf("整数を入力してください。\n");
    scanf("%d", &suuji);

    if (suuji % 2 == 0) {
        printf("%dは偶数です。\n", suuji);
    } else {
        printf("%dは奇数です。\n", suuji);
    }

    return 0;
}