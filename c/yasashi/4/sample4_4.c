#include <stdio.h>

int main(void) {
    int suuji;

    printf("整数を入力して下さい。\n");
    scanf("%d", &suuji);
    printf("正負を反転すると %d になります。\n", -suuji);
}