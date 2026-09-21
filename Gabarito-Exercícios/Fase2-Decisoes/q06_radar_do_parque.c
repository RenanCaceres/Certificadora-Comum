#include <stdio.h>

int main() {
    int altura;

    printf("Qual a sua altura em cm? ");
    scanf("%d", &altura);

    if (altura >= 140) {
        printf("Bem-vindo a montanha-russa Furia Digital!\n");
    }
    printf("Tenha um otimo dia no parque!\n");

    return 0;
}
