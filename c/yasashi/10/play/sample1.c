#include <stdio.h>

int main() {
    int array[5] = {1, 2, 3, 4, 5};
    int *pointer = array;

    for(int i = 0; i < 5; i++) {
        printf("array[%d] = %d\n", i, *(pointer + i));
    }

    return 0;
}