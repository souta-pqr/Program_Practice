#include<stdio.h>

int main()
{
	int area;
	int tate;

	printf("面積；");
	scanf("%d", &area);

	for(tate=1; tate < area; tate++){
		if(tate * tate > area) break;
		if(area % tate != 0) continue;
		printf("%d × %d\n", tate, area/tate);
	}

	return 0;
}
