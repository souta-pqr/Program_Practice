#include<stdio.h>

int main()
{
	int no;

	do{
		printf("正の整数を入力してください:");
		scanf("%d", &no);
		if(no <= 0)
			puts("\a正の整数を入力してください");
	}while(no <= 0);

	printf("%dそ逆から読むと", no);
	while(no > 0){
		printf("%d", no % 10);
		no /= 10;
	}
	puts("です");

	return 0;
}
