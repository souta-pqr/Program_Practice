#include <stdio.h>

struct Person {
  int age;
  double weight;
  double height;
};

void aging(struct Person *p) {
  p->age += 1;
}

int main(void) {
  struct Person person;

  printf("情報を入力してください。\n");
  printf("年齢: ");
  scanf("%d", &person.age);
  printf("体重: ");
  scanf("%lf", &person.weight);
  printf("身長: ");
  scanf("%lf", &person.height);

  printf("\n現在の情報:\n");
  printf("年齢: %d\n", person.age);
  printf("体重: %.2lf\n", person.weight);
  printf("身長: %.2lf\n", person.height);

  aging(&person);

  printf("\n1年後の情報:\n");
  printf("年齢: %d\n", person.age);
  printf("体重: %.2lf\n", person.weight);
  printf("身長: %.2lf\n", person.height);

  return 0;
}