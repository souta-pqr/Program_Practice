#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int min, max;

    min = max = arr[0];
    for (int i = 1; i < 5; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    printf("Min: %d, Max: %d\n", min, max);
    return 0;
}