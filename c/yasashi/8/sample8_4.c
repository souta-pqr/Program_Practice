#include <stdio.h>

#define SQUARE(x) ((x) * (x))

int main(void){
   int suuji, ans;

   printf("整数を入力してください.\n");
   scanf("%d", &suuji);

   ans = SQUARE(suuji);

   printf("%d の二乗は %d です.\n", suuji, ans);

   return 0;
}