#include <stdio.h>

int main(void) {
    int num1;

    printf("正の整数を入力してください：");
    scanf("%d", &num1);

    if (num1 > 0) {
        for (int i=2; i<=num1; i+=2) {
            printf("%d ", i);
        }
    }

    printf("\n");

    return 0;
}