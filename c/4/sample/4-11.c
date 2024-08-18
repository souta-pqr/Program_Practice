#include <stdio.h>

int main(void) {
    int num;

    printf("正の整数：");
    scanf("%d", &num);

    if (num > 0) {
        for (int i=1; i<=num; i++) {
            printf("＊\n");
        }
    }

    return 0;
}