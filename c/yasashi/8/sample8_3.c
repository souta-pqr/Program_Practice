#include <stdio.h>

int power(int x, int y);

int main(void) {
    int suuji1, suuji2, ans;

    printf("1番目の整数を入力してください.(1~5)\n");
    scanf("%d", &suuji1);
    printf("2番目の整数を入力してください.(1~5)\n");
    scanf("%d", &suuji2);

    ans = power(suuji1, suuji2);

    printf("%d の %d 乗は %d です.\n", suuji1, suuji2, ans);

    return 0;
}

int power(int x, int y) {
    int ans = 1;
    for (int i = 0; i < y; i++) {
        ans *= x;
    }
    return ans;
}