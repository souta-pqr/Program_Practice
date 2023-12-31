#include <stdio.h>

int main(void) {
    int num, i, isPrime = 1;

    printf("2以上の整数を入力してください。\n"); 
    scanf("%d", &num);

    for(i = 2; i <= num / 2; i++) {
        if(num % i == 0) {
            isPrime = 0;
            break;
        }
    }

    if(isPrime == 1) {
        printf("%d は素数です.\n", num);
    } else {
        printf("%d は素数ではありません.\n", num);
    }

    return 0;
}