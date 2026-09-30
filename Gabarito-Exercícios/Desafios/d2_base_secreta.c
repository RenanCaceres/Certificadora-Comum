#include <stdio.h>

int main() {
    int senha, tentativas = 0;
    const int MAX_TENTATIVAS = 3;
    const int SENHA_CORRETA = 9081;

    while (tentativas < MAX_TENTATIVAS) {
        printf("Tentativa %d de %d - digite a senha: ", tentativas + 1, MAX_TENTATIVAS);
        scanf("%d", &senha);

        if (senha == SENHA_CORRETA) {
            printf("Acesso permitido! Bem-vindo a base secreta.\n");
            break;
        }

        tentativas++;
        printf("Senha incorreta!\n");

        if (tentativas == MAX_TENTATIVAS) {
            printf("ALARME ACIONADO! Base bloqueada por seguranca.\n");
        }
    }

    return 0;
}
