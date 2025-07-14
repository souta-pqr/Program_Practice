/*整数を入力し，それが奇数であるか偶数であるかを表示*/
#include <stdio.h>

int main(void)
{
    int n;

    printf("整数を入力してください: ");
    scanf("%d", &n);

    if (n % 2 == 0) {
        printf("入力された整数は偶数です。\n");
    } else {
        printf("入力された整数は奇数です。\n");
    }

    return 0;
}