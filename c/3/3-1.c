#include<stdio.h>

int main()
{
	int no;

	printf("整数を入力してください:");
	scanf("%d", &no);
	
	//noが非0の時、実行される
	if(no % 10)
		puts("その数は10の倍数ではありませんでした");

	return 0;
}
