#include <stdio.h>

struct Person {
   int age;
   double weight;
   double height;
};

int main(void) {
   struct Person person1, person2;

   printf("1人目の情報を入力してください。\n");
   printf("年齢: ");
   scanf("%d", &person1.age);
   printf("体重: ");
   scanf("%lf", &person1.weight);
   printf("身長: ");
   scanf("%lf", &person1.height);

   printf("2人目の情報を入力してください。\n");
   printf("年齢: ");
   scanf("%d", &person2.age);
   printf("体重: ");
   scanf("%lf", &person2.weight);
   printf("身長: ");
   scanf("%lf", &person2.height);

   printf("\n1人目の情報:\n");
   printf("年齢: %d\n", person1.age);
   printf("体重: %.2lf\n", person1.weight);
   printf("身長: %.2lf\n", person1.height);

   printf("\n2人目の情報:\n");
   printf("年齢: %d\n", person2.age);
   printf("体重: %.2lf\n", person2.weight);
   printf("身長: %.2lf\n", person2.height);

   return 0;
}