/*素数判定*/
#include <stdio.h>

int main() {
    int n, i, flag = 0;
    printf("素数判定\n");
    printf("n = ");
    scanf("%d", &n);
    
    if (n <= 1) {
        printf("%dは素数ではありません。\n", n);
        return 0;
    }
    
    for (i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            flag = 1;
            break;
        }
    }
    
    if (flag == 0)
        printf("%dは素数です。\n", n);
    else
        printf("%dは素数ではありません。\n", n);
    
    return 0;
}