#include <stdio.h>

int main(void) {
    int num1, num2;

    printf("最初の数を入力して\n");
    scanf("%d", &num1);

    printf("次の数を入力して\n");
    scanf("%d", &num2);

    if (num2 % num1 == 0) {
        printf("%dは%dの約数です\n", num2, num1);
    }
    else {
        printf("%dは%dの約数ではありません\n", num2, num1);
    }

    return 0;
}