#include <stdio.h>

int main(void) {
    int suuji[5];
    int ans = 0;

    printf("テストの点数を入力してください。\n");

    for (int i=1; i<=5; i++) {
        scanf("%d", &suuji[i]);
    }

    for(int i=1; i<=5; i++) {
        printf("%d番の点は%d点です。\n", i, suuji[i]);
        if(suuji[i] > ans){
            ans = suuji[i];
        }
    }

    printf("最高点は%d点です。\n", ans);

    return 0;
}