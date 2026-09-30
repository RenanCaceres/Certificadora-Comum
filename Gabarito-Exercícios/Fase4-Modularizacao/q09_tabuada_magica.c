#include <stdio.h>

void mostrarTabuada(int numero) {
    int i;

    printf("=== TABUADA DO %d ===\n", numero);
    for (i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", numero, i, numero * i);
    }
}

int main() {
    int numero;

    printf("Digite um numero: ");
    scanf("%d", &numero);

    mostrarTabuada(numero);

    return 0;
}
