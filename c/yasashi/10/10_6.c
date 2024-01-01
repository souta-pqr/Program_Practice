#include <stdio.h>

int compare(char *str1, char *str2) {
  while (*str1 != '\0' && *str2 != '\0') {
      if (*str1 != *str2) {
          return -1;
      }
      str1++;
      str2++;
  }
  if (*str1 != '\0' || *str2 != '\0') {
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

   int result = compare(str1, str2);
   if(result == 1) {
       printf("同し。\n");
   } else if(result == -1) {
       printf("異なる。\n");
   } 

   return 0;
}