#include <stdio.h>

int somar(int a, int b) {
    return a + b;
}

int main() {
    int resultado;

    resultado = somar(5, 3);
    printf("5 + 3 = %d\n", resultado);

    resultado = somar(10, 20);
    printf("10 + 20 = %d\n", resultado);

    return 0;
}
