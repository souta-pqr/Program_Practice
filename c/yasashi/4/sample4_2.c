#include <stdio.h>

int main(void) {
    int bar;

    printf("正方形の辺の長さを入力して下さい。\n");
    scanf("%d", &bar);
    printf("正方形の面積は %d です。\n", bar*bar);

    return 0;
}