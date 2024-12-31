#include <stdio.h>

int string_length(const char *str);

int main(void) {
    const char *str = "Hello, World!";
    
    printf("The length of the string \"%s\" is %d.\n", str, string_length(str));

    return 0;
}

int string_length(const char *str) {
    int length = 0;
    while (str[length] != '\0') {
        length++;
    }
    return length;
}