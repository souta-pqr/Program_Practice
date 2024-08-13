#include <stdio.h>

int main(void) {
    int num1;

    printf("整数を入力してください\n");
    scanf("%d", &num1);

    if (num1 % 10 == 0 ) {
        printf("その数は10の倍数です\n");
    }
    else {
        printf("その数は10の倍数ではありません\n");
    }

    return 0;

}