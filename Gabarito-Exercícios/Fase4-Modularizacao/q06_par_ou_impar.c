#include <stdio.h>

int ehPar(int numero) {
    if (numero % 2 == 0) {
        return 1;
    } else {
        return 0;
    }
}

int main() {
    int numero;

    printf("Digite um numero: ");
    scanf("%d", &numero);

    if (ehPar(numero)) {
        printf("%d e PAR!\n", numero);
    } else {
        printf("%d e IMPAR!\n", numero);
    }

    return 0;
}
