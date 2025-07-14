/*文字列の長さを求める*/
#include <stdio.h>
#include <string.h>

int main() {
    char str[100];
    printf("文字列を入力してください: ");
    fgets(str, sizeof(str), stdin);

    // fgetsで読み込んだ文字列の末尾に改行が含まれる場合があるので、取り除く
    size_t len = strlen(str);
    if (len > 0 && str[len - 1] == '\n') {
        str[len - 1] = '\0';
    }

    printf("文字列の長さ: %zu\n", strlen(str));
    return 0;
}