#include <stdio.h>

/*scanf()
int scanf(const char *format, ...);
*/

int main() {
    char str1[100], str2[100];
    scanf("%s %s", str1, str2);
    printf("%s %s\n", str1, str2);
    return 0;
}