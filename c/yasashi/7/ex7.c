#include <stdio.h>
#include <string.h>

#define MAX_STRING_LENGTH 100

int main(void) {
    char str[MAX_STRING_LENGTH];

    printf("Enter a string: ");
    fgets(str, MAX_STRING_LENGTH, stdin);

    str[strcspn(str, "\n")] = 0; // Remove the newline character

    int length = strlen(str);

    printf("Reversed string: ");
    for (int i = length - 1; i >= 0; i--) {
        putchar(str[i]);
    }
    printf("\n");

    return 0;
}