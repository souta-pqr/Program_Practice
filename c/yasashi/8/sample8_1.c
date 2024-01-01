#include <stdio.h>

int min(int x, int y);

int main(void) {
    int suuji1, suuji2, ans;

    printf("1番目の整数を入力してください.\n");
    scanf("%d", &suuji1);

    printf("2番目の整数を入力してください.\n");
    scanf("%d", &suuji2);

    ans = min(suuji1, suuji2);
    printf("最小値は %d です.\n", ans);

    return 0;
}

int min(int x, int y) {
    if (x < y) {
        return x;
    }
    return y;
}