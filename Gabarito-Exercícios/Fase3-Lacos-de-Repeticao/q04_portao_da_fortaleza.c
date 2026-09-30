#include <stdio.h>

int main() {
    int senha, correta = 4728;

    printf("Digite a senha: ");
    scanf("%d", &senha);

    while (senha != correta) {
        printf("Senha incorreta! Tente novamente: ");
        scanf("%d", &senha);
    }

    printf("Acesso permitido!\n");

    return 0;
}
