#include <stdio.h>

int main(void) {
    int suuji;

    printf("0～10までの整数を入力してください。\n");
    scanf("%d", &suuji);
    
    if(suuji >= 0 && suuji <= 10) {
        printf("正解です。\n");
    }
    else {
        printf("間違いです。\n");
    }

    return 0;
}