#include <stdio.h>

int main(void) {
    int i, j, k=1;
    
    for (i=1; i<=5; i++) {
        for (j=1; j<=5; j++) {
            printf("*");
            if (k==j) {
                k++;
                break;
            }
        }
        printf("\n");
    }
}