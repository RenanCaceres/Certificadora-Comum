#include <stdio.h>

int calcularArea(int base, int altura) {
    return base * altura;
}

int main() {
    int base, altura, area;

    printf("Base do terreno: ");
    scanf("%d", &base);
    printf("Altura do terreno: ");
    scanf("%d", &altura);

    area = calcularArea(base, altura);
    printf("Area do terreno: %d metros quadrados\n", area);

    return 0;
}
