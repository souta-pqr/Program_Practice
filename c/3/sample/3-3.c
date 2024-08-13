#include <stdio.h>

int main(void) {
    int num1;

    printf("整数を入力して：");
    scanf("%d", &num1);

    if (num1 > 0) {
        printf("正\n");
    }
    else if (num1 == 0) {
        printf("0\n");
    }
    else {
        printf("負\n");
    }

    return 0;
}