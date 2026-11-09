#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 3: Laços de Repetição
 * Apresentado por: Lauren Marçulo
 * 
 * VAMOS PRATICAR LAÇOS!
 * Missão 2: O Baú de Moedas da Guilda
 * 
 * História:
 * Após 5 expedições em masmorras perigosas, a guilda reuniu moedas em cada jornada.
 * O tesoureiro precisa somar o ouro recolhido em cada uma das missões.
 * O programa deve ler os valores, acumular a soma e exibir o tesouro total!
 * 
 * Missão:
 * 1. Crie uma variável acumuladora int soma = 0; e int moedas;
 * 2. Use for (int i = 1; i <= 5; i++) para percorrer as 5 missões;
 * 3. Leia o valor arrecadado em cada missão com scanf;
 * 4. Acumule com soma += moedas; e exiba o total acumulado ao final.
 */

int main(void) {
    int soma = 0;
    int moedas;
    int i;

    printf("=== VAMOS PRATICAR LAÇOS! ===\n");
    printf("Missao 2: O Bau de Moedas da Guilda\n\n");

    for (i = 1; i <= 5; i++) {
        printf("Digite as moedas da missao %d: ", i);
        scanf("%d", &moedas);
        soma += moedas; // Acumula o valor arrecadado
    }

    printf("\n----------------------------------------\n");
    printf("Tesouro total acumulado pela guilda: %d moedas de ouro!\n", soma);

    return 0;
}
