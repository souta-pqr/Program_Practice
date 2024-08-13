#include <stdio.h>

int main(void) {
    int num1;

    printf("整数を入力して：");
    scanf("%d", &num1);

    if (num1 >= 0) {
        printf("%d\n", num1);
    }
    else {
        printf("%d\n", -num1);
    }

    return 0;
}