#include<stdio.h>

int main(){
	double x;

	printf("実数を入力してください:");
	scanf("%lf", &x);

	printf("あなたは%.1fと入力しましたね\n", x);

	return 0;
}
