#include <stdio.h>

void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int main(void) {
    int a = 1, b = 2;
    swap(&a, &b);
    printf("%d %d\n", a, b);
    return 0;
}