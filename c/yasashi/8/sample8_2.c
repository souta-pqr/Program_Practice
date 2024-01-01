#include <stdio.h>

int square(int x);

int main(void){
    int suuji, ans;

    printf("整数を入力してください.\n");
    scanf("%d", &suuji);

    ans = square(suuji);

    printf("%d の二乗は %d です.\n", suuji, ans);

    return 0;
}

int square(int x){
    return x * x;
}