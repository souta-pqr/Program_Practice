#include <stdio.h>

int main(void) {

    double num;

    printf("少数を入力してください\n");

    scanf("%lf", &num);

    printf("入力された少数は: %.2f\n", num);

    return 0;
}