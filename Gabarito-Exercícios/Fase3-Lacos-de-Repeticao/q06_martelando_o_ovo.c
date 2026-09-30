#include <stdio.h>

int main() {
    int cliques = 0;
    char resposta;

    do {
        cliques++;
        printf("Ovo martelado! Total de cliques: %d\n", cliques);
        printf("Martelar de novo? (s/n): ");
        scanf(" %c", &resposta);
    } while (resposta == 's');

    printf("Fim do jogo. Voce martelou %d vez(es).\n", cliques);

    return 0;
}
