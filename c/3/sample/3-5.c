#include <stdio.h>

int main(void) {
    int num1, num2;

    printf("整数１：");
    scanf("%d", &num1);

    printf("整数２:");
    scanf("%d", &num2);

    if (num1 > num2) {
        printf("%dは%dよりも大きいです\n", num1, num2);
    }
    else if (num1 == num2) {
        printf("%dと%dは等しいです\n", num1, num2);
    }
    else {
        printf("%dは%dよりも小さいです\n", num1, num2);
    }

    return 0;
}