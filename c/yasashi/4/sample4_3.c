#include <stdio.h>

int main(void) {
    int takasa;
    int teihen;
    double kekka;

    printf("三角形の高さを入力して下さい。\n");
    scanf("%d", &takasa);
    printf("三角形の底辺の長さを入力して下さい。\n");
    scanf("%d", &teihen);

    kekka = 0.5 * teihen * takasa;
    printf("三角形の面積は %f です。\n", kekka);

    return 0;
}