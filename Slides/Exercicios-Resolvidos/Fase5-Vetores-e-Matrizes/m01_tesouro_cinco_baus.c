#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 5: Vetores e Matrizes
 * Apresentado por: Lauren Marçulo
 * 
 * VAMOS PRATICAR VETORES!
 * Missão 1: O Tesouro dos Cinco Baús
 * 
 * História:
 * Um grupo de aventureiros encontrou 5 baús de ouro escondidos numa masmorra,
 * numerados de [0] a [4]. Cada baú guarda uma quantidade diferente de moedas.
 * 
 * Missão:
 * 1. Crie o vetor: int baus[5] = {15, 40, 8, 25, 12};
 * 2. Crie uma variável acumuladora: int total = 0;
 * 3. Use um laço for (int i = 0; i < 5; i++) para somar;
 * 4. Exiba o ouro total conquistado pela equipe.
 */

int main(void) {
    int baus[5] = {15, 40, 8, 25, 12};
    int total = 0;
    int i;

    printf("=== VAMOS PRATICAR VETORES! ===\n");
    printf("Missao 1: O Tesouro dos Cinco Baus\n\n");

    for (i = 0; i < 5; i++) {
        printf("Bau [%d]: %d moedas de ouro\n", i, baus[i]);
        total += baus[i];
    }

    printf("\n--------------------------------\n");
    printf("Ouro total conquistado: %d moedas!\n", total);

    return 0;
}
