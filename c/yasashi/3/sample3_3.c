#include <stdio.h>

int main(void) {
    char moji;

    printf("アルファベットの最初の文字はいくつですか？\n");
    scanf("%c", &moji);
    printf("アルファベットの最初の文字は%cです。\n", moji);

    return 0;
}