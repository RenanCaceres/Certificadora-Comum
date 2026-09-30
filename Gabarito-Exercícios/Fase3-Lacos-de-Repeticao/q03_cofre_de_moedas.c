#include <stdio.h>

int main() {
    int i, numero, soma = 0;

    for (i = 1; i <= 5; i++) {
        printf("Digite o numero %d: ", i);
        scanf("%d", &numero);
        soma = soma + numero;
    }

    printf("Soma = %d\n", soma);

    return 0;
}
