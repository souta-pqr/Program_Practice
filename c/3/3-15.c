#include<stdio.h>

int main()
{
	int no;

	printf("正巣を入力してください：");
	scanf("%d", &no);

	switch(no % 2){
		case 0: puts("その数は偶数です"); break;
		case 1: puts("その数は奇数です"); break;
	}

	return 0;
}
