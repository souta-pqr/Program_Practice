#include <stdio.h>

// 文字列中に含まれている文字「a」の個数を調べる関数
int search(char str[]) {
   int count = 0;
   for(int i = 0; str[i] != '\0'; i++) {
       if(str[i] == 'a') {
           count++;
       }
   }
   return count;
}

int main() {
   char str[80];

   printf("文字列を入力してください。\n");
   scanf("%s", str);
   
   int count = search(str);
   printf("'%s'の中にはaは%d個あります.\n", str, count);
   return 0;
}