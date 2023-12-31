#include <stdio.h>
#include <string.h>

#define MAX_STRING_LENGTH 100

int main(void) {
    char str1[MAX_STRING_LENGTH];
    char str2[MAX_STRING_LENGTH];
    int ans = 0;

    printf("文字列を入力してください。\n");
    fgets(str1, MAX_STRING_LENGTH, stdin);

    str1[strcspn(str1, "\n")] = 0; // Remove the newline character

    for (int i=0; i<=strlen(str1); i++) {
        if(str1[i] == 'a') {
            str2[i] = 'b';
        }
        else {
            str2[i] = str1[i];
        }
    }

    printf("%sに置き換えました。\n", str2);

    return 0;
}