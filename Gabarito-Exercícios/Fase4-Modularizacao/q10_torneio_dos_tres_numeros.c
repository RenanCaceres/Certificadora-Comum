#include <stdio.h>

int maior(int a, int b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

int main() {
    int x, y, z, maiorEntreDois, maiorFinal;

    printf("Digite tres numeros:\n");
    printf("Numero 1: ");
    scanf("%d", &x);
    printf("Numero 2: ");
    scanf("%d", &y);
    printf("Numero 3: ");
    scanf("%d", &z);

    maiorEntreDois = maior(x, y);
    maiorFinal = maior(maiorEntreDois, z);

    printf("O maior numero e: %d\n", maiorFinal);

    return 0;
}
