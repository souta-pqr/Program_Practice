/*整数を入力し，その値を2進数で表示する*/
#include <stdio.h>

int main(void) {
    int n, i;
    unsigned int mask = 1 << (sizeof(int) * 8 -1 ); // マスクを最上位ビットに設定
    printf("整数を入力してください: ");
    scanf("%d", &n);
    printf("入力された整数の2進数表現: ");
    for (i = 0; i < sizeof(int) * 8; i++)
    {
        if (n & mask) {
            printf("1");
        } else {
            printf("0");
        }
        mask >>= 1; // マスクを右にシフト
    }
    printf("\n");
    return 0;
}