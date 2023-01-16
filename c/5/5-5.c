#include<stdio.h>
#define NUMBER 7

int main()
{
	int i;
	int x[NUMBER];

	for(i=0; i<NUMBER; i++){
		printf("x[%d] : ", i);
		scanf("%d", &x[i]);
	}

	for(i=0; i<NUMBER/2; i++){
		int tmp = x[i];
		x[i] = x[NUMBER - i - 1];
		x[NUMBER - i - 1] = tmp;
	}

	puts("反転しました");

	for(i=0; i<NUMBER; i++)
		printf("x[%d] = %d\n", i, x[i]);

	return 0;
}
