#include <stdio.h>
#include <string.h>

#define MAX_STRING_LENGTH 100

int main(void) {
    char str[MAX_STRING_LENGTH];
    int length;

    printf("文字列を入力してください。\n");
    fgets(str, MAX_STRING_LENGTH, stdin);

    length = strlen(str) - 1;

    printf("文字列の長さは%dです。\n", length);

    return 0;
}