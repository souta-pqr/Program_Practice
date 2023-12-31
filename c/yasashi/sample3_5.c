#include <stdio.h>

int main(void) {
    float height;
    float weight;

    printf("身長と体重を入力してください．\n");
    scanf("%f %f", &height, &weight);
    printf("身長は%fセンチです。\n体重は%fキロです。\n", height, weight);

    return 0;
}