# include <stdio.h>

/*fgets()
char *fgets(char *str, int size, FILE *stream);
*/
int main() {
    char buffer[100];
    printf("Enter a string: ");
    fgets(buffer, sizeof(buffer), stdin);

    printf("You entered: %s\n", buffer);
    return 0;
}
