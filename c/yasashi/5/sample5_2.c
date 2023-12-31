#include <stdio.h>

int main(void) {
    int suuji1, suuji2;

    printf("2つの整数を入力してください。\n");
    scanf("%d %d", &suuji1, &suuji2);
    if (suuji1 > suuji2) {
        printf("%dよりも%dのほうが大きい値です。\n", suuji2, suuji1);
    }
    else if(suuji1 < suuji2) {
        printf("%dよりも%dのほうが大きい値です。\n", suuji1, suuji2);
    }
    else {
        printf("%dと%dは同じ値です。\n", suuji1, suuji2);
    }

    return 0;
}