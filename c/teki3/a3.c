#include <stdio.h>

int main() {
    int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int sum = 0;

    for (int i=0; i<10; i++) {
        sum += arr[i];
    }
    printf("%d\n", sum);
    
    return 0;
}