#include <stdio.h>
#include <string.h>

#define MAX_STRING_LENGTH 100

int main(void) {
    int ans = 0;

    char str[MAX_STRING_LENGTH];

    printf("文字列を入力してください。\n");
    fgets(str, MAX_STRING_LENGTH, stdin);

    str[strcspn(str, "\n")] = 0; // Remove the newline character

    for (int i=0; i<strlen(str); i++) {
        if(str[i] == 'a') {
            ans++;
        }
    }

    printf("%sに'a'が%d個あります。\n", str, ans);

    return 0;
}