#include <stdio.h>

int main(void) {
    int num1, num2, res, ans=0;

    printf("整数１：");
    scanf("%d", &num1);

    printf("整数２：");
    scanf("%d", &num2);

    if (num1 > num2) {
        res = num1 - num2;
        for (int i=0; i<=res; i++) {
            ans += i;
        }
    }
    else {
        res = num2 - num1;
        for (int i=0; i<=res; i++) {
            ans += i;
        }
    }

    printf("合計：%d\n", ans);

    return 0;
}