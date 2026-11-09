#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 3: Laços de Repetição
 * Apresentado por: Lauren Marçulo
 * 
 * VAMOS PRATICAR LAÇOS!
 * Missão 4: O Treino do Guerreiro
 * 
 * História:
 * Um jovem guerreiro entra na arena da guilda para treinar seus golpes no alvo.
 * O treinamento exige que ele desfira ao menos 1 golpe para iniciar o treino.
 * Após cada golpe, o jogador decide se deseja continuar treinando ('s'/'n').
 * 
 * Missão:
 * 1. Crie o contador int golpes = 0; e a variável char resposta;
 * 2. Use do { ... } while (resposta == 's'); para garantir ao menos o primeiro golpe;
 * 3. A cada repetição, incremente golpes++ e exiba o golpe realizado;
 * 4. Ao encerrar o laço, exiba o total de golpes executados na sessão.
 */

int main(void) {
    int golpes = 0;
    char resposta;

    printf("=== VAMOS PRATICAR LAÇOS! ===\n");
    printf("Missao 4: O Treino do Guerreiro\n\n");

    do {
        golpes++;
        printf(">> Golpe %d desferido com precisao no alvo!\n", golpes);
        printf("Deseja desferir mais um golpe? (s/n): ");
        scanf(" %c", &resposta);
    } while (resposta == 's' || resposta == 'S');

    printf("\n----------------------------------------\n");
    printf("Treino finalizado com sucesso! Total de golpes: %d\n", golpes);

    return 0;
}
