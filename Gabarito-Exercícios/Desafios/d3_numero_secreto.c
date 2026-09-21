#include <stdio.h>

#define SECRETO 42

int main() {
    int palpite, tentativas, acertou = 0;

    printf("=== NUMERO SECRETO ===\n");
    printf("Adivinhe o numero entre 1 e 100. Voce tem 7 tentativas!\n");

    for (tentativas = 1; tentativas <= 7; tentativas++) {
        printf("Tentativa %d de 7 - seu palpite: ", tentativas);
        scanf("%d", &palpite);

        if (palpite == SECRETO) {
            acertou = 1;
            break;
        } else if (palpite > SECRETO) {
            printf("Muito alto!\n");
        } else {
            printf("Muito baixo!\n");
        }
    }

    if (acertou == 1) {
        printf("Acertou em %d tentativa(s)!\n", tentativas);
        if (tentativas <= 3) {
            printf("Rank: NINJA\n");
        } else if (tentativas <= 5) {
            printf("Rank: ESPERTO\n");
        } else {
            printf("Rank: PERSISTENTE\n");
        }
    } else {
        printf("Fim de jogo! O numero secreto era %d.\n", SECRETO);
    }

    return 0;
}
