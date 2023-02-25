#include <stdio.h>

int main(){
	int height = 5;
	int width = 10;

	for (int i=1; i<=height; i++){
		for (int j=1; j<=width; j++)
			printf("%d", (i+j-1)%10);
		putchar('\n');
	}

	return 0;
}
