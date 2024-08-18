#include <stdio.h>

int main(void) {
    int num;

    printf("正の整数：");
    scanf("%d", &num);

    if (num > 0) {
        for (int i=0; i<=num; i++) {
            if(i%2==0) {
                printf("+");
            }
            else {
                printf("-");
            }
        }
    }

    printf("\n");

    return 0;
}