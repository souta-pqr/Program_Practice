/*金額を入力し，1万円札，5000円札，1000円札，500円玉，50円玉，10円玉，5円玉，1円玉が最小でいくつ必要か表示する*/
#include <stdio.h>

int main() {
    int sum = 0;

    printf("金額を入力してください:\n");
    scanf("%d", &sum);
    printf("必要な硬貨・札の枚数:\n");
    printf("1万円札: %d枚\n", sum / 10000);
    sum %= 10000;
    printf("5000円札: %d枚\n", sum / 5000);
    sum %= 5000;
    printf("1000円札: %d枚\n", sum / 1000);
    sum %= 1000;
    printf("500円玉: %d枚\n", sum / 500);
    sum %= 500;
    printf("50円玉: %d枚\n", sum / 50);
    sum %= 50;
    printf("10円玉: %d枚\n", sum / 10);
    sum %= 10;
    printf("5円玉: %d枚\n", sum / 5);
    sum %= 5;
    printf("1円玉: %d枚\n", sum / 1);
    sum %= 1;
   
    return 0;
}