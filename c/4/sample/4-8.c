#include <stdio.h>

int main(void) {
    int num1;

    printf("整数を入力して：");
    scanf("%d", &num1);

    printf("{");

    for (int i=1; i<=num1; i++) {
        if (i==num1) {
            printf("%d}\n", i);
        }
        else {
            printf("%d ", i);
        }
    }

    return 0;
}