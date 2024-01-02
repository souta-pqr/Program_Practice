#include <stdio.h>

int main(int argc, char *argv[]) {
 FILE *fp;
 int i, j;

 if(argc != 2) {
   printf("Usage: %s filename\n", argv[0]);
   return 1;
 }

 fp = fopen(argv[1], "w");
 if (fp == NULL) {
   printf("Error opening file!\n");
   return 1;
 }

 for(i = 1; i <= 5; i++) {
   for(j = 1; j <= 5; j++) {
       fprintf(fp, "%*d ", 3, j * i);
   }
   fprintf(fp, "\n");
 }

 fclose(fp);

 return 0;
}