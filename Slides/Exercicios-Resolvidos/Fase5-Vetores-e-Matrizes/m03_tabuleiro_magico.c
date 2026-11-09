#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 5: Vetores e Matrizes
 * Apresentado por: Lauren Marçulo
 * 
 * VAMOS PRATICAR MATRIZES!
 * Missão 3: O Tabuleiro Mágico 2x2
 * 
 * História:
 * Em um mini-RPG de tabuleiro, a arena elemental tem 2 linhas e 2 colunas
 * guardando o poder de gemas. Precisamos somar a energia total da arena mágica!
 * 
 * Missão:
 * 1. Declare: int arena[2][2] = { {15, 25}, {10, 30} };
 * 2. Crie uma variável: int energia = 0;
 * 3. Use dois laços for aninhados (linhas i e colunas j);
 * 4. Imprima a matriz em grid e mostre a energia total.
 */

int main(void) {
    int arena[2][2] = {
        {15, 25},
        {10, 30}
    };
    int energia = 0;
    int i, j;

    printf("=== VAMOS PRATICAR MATRIZES! ===\n");
    printf("Missao 3: O Tabuleiro Magico 2x2\n\n");
    printf("Grade da Arena Elemental:\n");

    for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
            printf("[%2d] ", arena[i][j]);
            energia += arena[i][j];
        }
        printf("\n");
    }

    printf("\n--------------------------------\n");
    printf("Energia total da arena: %d unidades magicas\n", energia);

    return 0;
}
