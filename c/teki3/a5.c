/*n番目までのフィボナッチ数列を表示*/
#include <stdio.h>

int main() {
    int n;
    printf("n番目までのフィボナッチ数列を表示します。\n");
    printf("nの値を入力してください: ");
    scanf("%d", &n);

    int a = 0, b = 1, c;
    printf("フィボナッチ数列: %d %d ", a, b);
    
    for (int i = 2; i < n; i++) {
        c = a + b;
        printf("%d ", c);
        a = b;
        b = c;
    }
    
    printf("\n");
    return 0;
}