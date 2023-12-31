#include <stdio.h>

int main(void) {
    int suuji[5];
    int ans = 0;

    printf("テストの点数を入力してください。\n");

    for (int i=1; i<=5; i++) {
        scanf("%d", &suuji[i]);
    }

    for(int i=1; i<=5; i++) {
        printf("%d番目の人の点数は%d点です。\n", i, suuji[i]);
        if(suuji[i] >= 70){
            ans++;
        }
    }

    printf("70点以上の学生は%d人です。\n", ans);

    return 0;
}