#include <stdio.h>

int main(void) {
    int point;

    printf("点数を入力して：");
    scanf("%d", &point);

    if (80 <= point && point <= 100) {
        printf("優\n");
    }
    else if (70 <= point) {
        printf("良\n");
    }
    else if (60 <= point) {
        printf("可\n");
    }
    else {
        printf("不可\n");
    }

    return 0;
}