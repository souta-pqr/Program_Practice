#include <stdio.h>

int main(void) {
    int num1, num2, num3, res;

    printf("整数１：");
    scanf("%d", &num1);
    printf("整数２：");
    scanf("%d", &num2);
    printf("整数３：");
    scanf("%d", &num3);

    res = num1;

    if (res > num2) {
        res = num2;
    }
    else if (res > num3) {
        res = num3;
    }

    printf("最小値は%d\n", res);

    return 0;
}