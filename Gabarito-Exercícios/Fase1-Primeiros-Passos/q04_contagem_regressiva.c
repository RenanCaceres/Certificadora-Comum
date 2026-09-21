#include <stdio.h>

int main() {
    int n;

    printf("Contagem regressiva a partir de: ");
    scanf("%d", &n);

    while (n >= 1) {
        printf("%d\n", n);
        n = n - 1;
    }
    printf("DECOLAR!\n");

    return 0;
}
