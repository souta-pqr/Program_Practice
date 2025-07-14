/*2の0乗から15乗までの表示するプログラム*/
#include <stdio.h>

int main(void)
{
    int i;
    for (i = 0; i <= 15; i++) {
        printf("2の%d乗は%dです。\n", i, 1 << i);
    }
    return 0;
}
