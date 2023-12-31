#include <stdio.h>

int main(void) {
    int suuji;
    
    printf("成績を入力してください.\n");
    scanf("%d", &suuji);

    switch(suuji){
        case 1:
            printf("成績は1です.\nもっと頑張りましょう.\n");
            break;
        case 2:
            printf("成績は2です.\nもう少し頑張りましょう.\n");
            break;
        case 3:
            printf("成績は3です.\nさらに上を目指しましょう.\n");
            break;
        case 4:
            printf("成績は4です.\nたいへんよくできました.\n");
            break;
        case 5:
            printf("成績は5です.\nたいへん優秀です.\n");
            break;
        default:
            printf("Error!\n");
            break;
    
        return 0;
    }
}