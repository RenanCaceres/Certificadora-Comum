#include <stdio.h>

int main() {
    int caixas = 0, peso;

    printf("Peso da caixa (0 para encerrar): ");
    scanf("%d", &peso);

    while (peso != 0) {
        caixas = caixas + 1;
        printf("Peso da caixa (0 para encerrar): ");
        scanf("%d", &peso);
    }

    printf("Total de caixas pesadas: %d\n", caixas);

    return 0;
}
