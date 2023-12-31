#include <stdio.h>

int main(void) {
    char moji;

    printf("A～Cまでの文字を入力してください.\n");
    scanf("%c", &moji);

    if (moji == 'A' || moji == 'B' || moji == 'C') {
        printf("正解です。\n");
    }
    else {
        printf("間違いです。\n");
    }

    return 0;
}