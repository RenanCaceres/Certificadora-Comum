#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 2: O Programa Aprende a Decidir
 * Apresentado por: Lorena Eduarda
 * 
 * VAMOS PRATICAR!
 * Missão 3: Menu do Mascote / Personagem RPG (switch)
 * 
 * História:
 * No simulador interativo de mascote e personagem de RPG, o jogador escolhe
 * a rotina diária através de um menu de opções numéricas:
 * - [1] Estudar (+10 INT)
 * - [2] Jogar (+10 DIVERSAO)
 * - [3] Dormir (Energia 100%)
 * Qualquer outra opção deve ser tratada como entrada inválida via default.
 * 
 * Missão:
 * 1. Exiba o menu de opções na tela e leia a escolha do jogador com scanf;
 * 2. Utilize a estrutura switch (opcao) com case 1, case 2 e case 3;
 * 3. Finalize cada case com o comando break para evitar transbordamento;
 * 4. Trate escolhas inválidas através do bloco default.
 */

int main(void) {
    int opcao;

    printf("=== VAMOS PRATICAR! ===\n");
    printf("Missao 3: Menu do Mascote / Personagem RPG (switch)\n\n");

    printf("======== ROTINA DO HERÓI ========\n");
    printf("1 - Estudar na Biblioteca da Guilda\n");
    printf("2 - Jogar na Taverna de Jogos\n");
    printf("3 - Dormir na Estalagem Confortavel\n");
    printf("=================================\n");
    printf("Escolha uma atividade (1, 2 ou 3): ");
    scanf("%d", &opcao);

    printf("\n----------------------------------------\n");
    switch (opcao) {
        case 1:
            printf("Atividade escolhida: Estudar!\n");
            printf("Voce leu grimorios antigos. +10 de Inteligencia (INT)!\n");
            break;
        case 2:
            printf("Atividade escolhida: Jogar!\n");
            printf("Partida emocionante de cartas! +10 de Diversao!\n");
            break;
        case 3:
            printf("Atividade escolhida: Dormir!\n");
            printf("Sono reparador na estalagem. Barra de Energia restaurada para 100%%!\n");
            break;
        default:
            printf("Opcao invalida! O heroi ficou confuso e nao realizou nenhuma acao.\n");
            break;
    }

    return 0;
}
