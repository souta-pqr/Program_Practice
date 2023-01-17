#include<stdio.h>

int min2(int a, int b)
{
	return (a < b) ? a : b;
}

int main()
{
	int n1, n2;

	puts("二つの整数を入力してください");
	printf("整数１："); scanf("%d", &n1);
	printf("整数２："); scanf("%d", &n2);

	printf("小さいほうの値は%dです\n", min2(n1, n2));

	return 0;
}
