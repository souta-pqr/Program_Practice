/*3つの整数を入力し，最も大きい数を表示するプログラム*/
#include <stdio.h>

int main(void)
{
    int a, b, c;

    printf("3つの整数を入力してください: ");
    scanf("%d %d %d", &a, &b, &c);

    if (a >= b && a >= c) {
        printf("最も大きい数は: %d\n", a);
    } else if (b >= a && b >= c) {
        printf("最も大きい数は: %d\n", b);
    } else {
        printf("最も大きい数は: %d\n", c);
    }

    return 0;
}