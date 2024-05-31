#include <stdio.h>

int main(void) {

    printf("Hello1\a");
    printf("Hello2\b");
    printf("Hello3\t");
    printf("Hello4\v");
    printf("Hello5\f");

    printf("円記号を表示します: %c\n", "\\");
    printf("アポストロフィを表示します: %c\n", "\'");

    return 0;
}