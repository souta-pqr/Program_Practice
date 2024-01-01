#include <stdio.h>

void add(int* x1, int* x2, int a) {
   *x1 += a;
   *x2 += a;
}

int main(void) {
   int x1, x2, a;

   printf("x1の点数を入力してください: ");
   scanf("%d", &x1);

   printf("x2の点数を入力してください: ");
   scanf("%d", &x2);

   printf("a点ずつ加点する数を入力してください: ");
   scanf("%d", &a);

   add(&x1, &x2, a);

   printf("新しい点数は x1=%d, x2=%d です。\n", x1, x2);

   return 0;
}