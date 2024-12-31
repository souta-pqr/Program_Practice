#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num;
    printf("%d\n", *ptr);
    printf("%p\n", ptr);
    printf("%p\n", &num);
    return 0;
}