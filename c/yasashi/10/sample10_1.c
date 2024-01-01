#include <stdio.h>

int length(char str[]) {
   int i = 0;
   while (str[i] != '\0') {
       i++;
   }
   return i;
}

int main(void) {
   char str[80];

   printf("文字列を入力してください。\n");
   scanf("%s", str);

   printf("文字列の長さは %d です。\n", length(str));

   return 0;
}