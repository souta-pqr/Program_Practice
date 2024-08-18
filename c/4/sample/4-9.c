#include <stdio.h>

int main(void) {
    int num;

    printf("正の整数を入力して：");
    scanf("%d", &num);

    if (num > 0) {
        for (int i=1; i<=num; i++) {
            printf("*");
        }
    }

    printf("\n");

    return 0;
}