/* main.c */
#include <stdio.h>
#include "power.h"
./main

int main(void) {
   int suuji1, suuji2, ans;

   printf("1番目の整数を入力してください.(1~5)\n");
   scanf("%d", &suuji1);
   printf("2番目の整数を入力してください.(1~5)\n");
   scanf("%d", &suuji2);

   ans = power(suuji1, suuji2);

   printf("%d の %d 乗は %d です.\n", suuji1, suuji2, ans);

   return 0;
}
