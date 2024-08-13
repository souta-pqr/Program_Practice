#include <stdio.h>

int main(void) {
    int num1, num2;

    printf("整数１:");
    scanf("%d", &num1);

    printf("整数２：");
    scanf("%d", &num2);

    printf("%d\n", num1 >= num2);
    printf("%d\n", num1 == num2);
    printf("%d\n", num1 <= num2);

    return 0;
}