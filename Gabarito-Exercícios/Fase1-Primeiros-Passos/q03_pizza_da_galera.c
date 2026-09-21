#include <stdio.h>

int main() {
    int pessoas, fatias, cada, sobra;

    printf("Quantas pessoas? ");
    scanf("%d", &pessoas);
    printf("Quantas fatias no total? ");
    scanf("%d", &fatias);

    cada = fatias / pessoas;
    sobra = fatias % pessoas;

    printf("Cada pessoa come %d fatia(s).\n", cada);
    printf("Sobram %d fatia(s) para o cachorro.\n", sobra);

    return 0;
}
