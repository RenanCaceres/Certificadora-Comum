#include <stdio.h>

int main() {
    int vida_jogador = 40, vida_dragao = 100;
    int opcao, rodando = 1;

    printf("=== BATALHA CONTRA O DRAGAO ===\n");

    while (rodando == 1) {
        printf("\nVoce: %d de vida | Dragao: %d de vida\n", vida_jogador, vida_dragao);
        printf("1 - Atacar\n2 - Beber pocao\n3 - Fugir\nEscolha: ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                vida_dragao = vida_dragao - 20;
                printf("Voce atacou! O dragao perdeu 20 de vida.\n");
                break;
            case 2:
                vida_jogador = vida_jogador + 20;
                printf("Voce bebeu a pocao! Ganhou 20 de vida.\n");
                break;
            case 3:
                printf("Voce fugiu da batalha...\n");
                rodando = 0;
                break;
            default:
                printf("Opcao invalida! Voce perdeu a vez.\n");
        }

        if (rodando == 1) {
            if (vida_dragao <= 0) {
                printf("VITORIA! O dragao foi derrotado!\n");
                rodando = 0;
            } else {
                vida_jogador = vida_jogador - 10;
                printf("O dragao atacou! Voce perdeu 10 de vida.\n");
                if (vida_jogador <= 0) {
                    printf("DERROTA... O dragao venceu.\n");
                    rodando = 0;
                }
            }
        }
    }

    return 0;
}
