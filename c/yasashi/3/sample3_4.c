#include <stdio.h>

int main(void) {
    float height;
    float weight;

    printf("身長を入力してください．\n");
    scanf("%f", &height);

    printf("体重を入力してください．\n");
    scanf("%f", &weight);

    printf("身長は%fセンチです.\n体重は%fキロです.\n", height, weight);

    return 0;
}