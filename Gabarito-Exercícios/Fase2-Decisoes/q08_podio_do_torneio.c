#include <stdio.h>

int main() {
    int pontos;

    printf("Quantos pontos voce fez? ");
    scanf("%d", &pontos);

    if (pontos >= 90) {
        printf("Medalha de OURO!\n");
    } else if (pontos >= 70) {
        printf("Medalha de PRATA!\n");
    } else if (pontos >= 50) {
        printf("Medalha de BRONZE!\n");
    } else {
        printf("Continue treinando, voce chega la!\n");
    }

    return 0;
}
