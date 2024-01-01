/* power.c */
#include <stdio.h>

int power(int x, int y) {
   int ans = 1;
   for (int i = 0; i < y; i++) {
       ans *= x;
   }
   return ans;
}