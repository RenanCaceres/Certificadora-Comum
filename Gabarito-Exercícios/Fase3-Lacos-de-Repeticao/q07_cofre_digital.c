#include <stdio.h>

int main() {
    int senha;

    do {
        printf("Cofre: digite a senha de 4 digitos: ");
        scanf("%d", &senha);
    } while (senha != 1234);

    printf("Cofre aberto!\n");

    return 0;
}
