#include <stdio.h>

int main() {
    int i, numero, soma = 0, pares = 0;

    for (i = 1; i <= 10; i++) {
        printf("Digite o numero %d: ", i);
        scanf("%d", &numero);

        if (numero < 0) {
            printf("Numero negativo! Ignorado.\n");
            continue;
        }

        soma = soma + numero;

        if (numero % 2 == 0) {
            pares++;
        }

        if (soma > 50) {
            printf("Limite de 50 pontos atingido! Encerrando.\n");
            break;
        }
    }

    printf("Pontuacao final: %d\n", soma);
    printf("Numeros pares digitados: %d\n", pares);

    return 0;
}
