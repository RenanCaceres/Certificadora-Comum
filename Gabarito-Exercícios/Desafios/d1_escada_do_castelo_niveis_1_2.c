#include <stdio.h>

int main() {
    int n, i, j;

    printf("Quantos degraus tem a escada? ");
    scanf("%d", &n);

    if (n < 1) {
        printf("Numero invalido!\n");
    } else {
        for (i = 1; i <= n; i++) {
            for (j = 1; j <= i; j++) {
                printf("*");
            }
            printf("\n");
        }
    }

    return 0;
}
