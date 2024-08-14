#include <stdio.h>

int main(void) {
    int retry;

    do {
        int num1;

        printf("整数を入力して：");
        scanf("%d", &num1);

        if (num1 > 0){
            printf("正です\n");
        }
        else if (num1 < 0) {
            printf("負です\n");
        }

        printf("もう一度入力する場合は9、やめる場合は0を入力して：");
        scanf("%d", &retry);

    } while (retry == 9);

    return 0;

}