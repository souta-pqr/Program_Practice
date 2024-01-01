#include <stdio.h>

int compare(char str1[], char str2[]) {
   int i = 0;
   while (str1[i] != '\0' && str2[i] != '\0') {
       if (str1[i] != str2[i]) {
           return -1;
       }
       i++;
   }
   if (str1[i] != '\0' || str2[i] != '\0') {
       return -1;
   }
   return 1;
}

int main(void) {
    char str1[80];
    char str2[80];

    printf("1つ目の文字列を入力してください。\n");
    scanf("%s", str1);

    printf("2つ目の文字列を入力してください。\n");
    scanf("%s", str2);

    int result = conpare(str1, str2);
    if(result == 1) {
        printf("同し。\n");
    } else if(result == -1) {
        printf("異なる。\n");
    } 

    return 0;
}