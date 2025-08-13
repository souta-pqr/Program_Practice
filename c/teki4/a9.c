/*sscanf()
int sscanf(const char *str, const char *format, ...);
*/
#include <stdio.h>

int main() {
    char input[] = "123 45.68 hello";
    int num;
    float value;
    char str[20];

    int result = sscanf(input, "%d %f %s", &num, &value, str);

    printf("抽出できた項目数: %d\n", result);
    printf("整数: %d, 浮動小数点数: %.2f, 文字列: %s\n", num, value, str);

    char date[] = "2023-10-01";
    int year, month, day;
    sscanf(date, "%d-%d-%d", &year, &month, &day);
    printf("日付: %d年%d月%d日\n", year, month, day);

    return 0;
}