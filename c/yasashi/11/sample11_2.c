#include <stdio.h>

struct Person {
  int age;
  double weight;
  double height;
};

int main(void) {
  struct Person people[2];

  for(int i = 0; i < 2; i++) {
     printf("%d人目の情報を入力してください。\n", i+1);
     printf("年齢: ");
     scanf("%d", &people[i].age);
     printf("体重: ");
     scanf("%lf", &people[i].weight);
     printf("身長: ");
     scanf("%lf", &people[i].height);
  }

  for(int i = 0; i < 2; i++) {
     printf("\n%d人目の情報:\n", i+1);
     printf("年齢: %d\n", people[i].age);
     printf("体重: %.2lf\n", people[i].weight);
     printf("身長: %.2lf\n", people[i].height);
  }

  return 0;
}