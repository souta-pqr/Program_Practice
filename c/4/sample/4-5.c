#include <stdio.h>

int main(void) {
    int num1;

    printf("整数値を入力して：");
    scanf("%d", &num1);

    if (num1 > 0) {
        for (int i=1; i<=num1; i++) {
            printf("%d\n", i);
        }
    }

    return 0;
}