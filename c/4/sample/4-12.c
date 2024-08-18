#include <stdio.h>

int main() {
    int num, reversed = 0, remainder;

    printf("正の整数を入力してください: ");
    scanf("%d", &num);

    while (num != 0) {
        remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num /= 10;
    }

    printf("逆順の数字: %d\n", reversed);

    return 0;
}