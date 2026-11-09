#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 5: Vetores e Matrizes
 * Apresentado por: Lauren Marçulo
 * 
 * VAMOS PRATICAR VETORES!
 * Missão 2: O Recorde do Campeonato
 * 
 * História:
 * Cinco pilotos disputaram a grande final da UTFPR. As pontuações finais
 * foram guardadas em um vetor. O sistema precisa descobrir qual foi a maior nota!
 * 
 * Missão:
 * 1. Vetor de pontos: int pts[5] = {42, 88, 75, 95, 60};
 * 2. Assuma inicialmente: int recorde = pts[0];
 * 3. Percorra o vetor comparando: se pts[i] > recorde, atualize o valor do recorde!
 * 4. Mostre o recorde e o troféu do campeão na tela.
 */

int main(void) {
    int pts[5] = {42, 88, 75, 95, 60};
    int recorde = pts[0];
    int campeaoIndex = 0;
    int i;

    printf("=== VAMOS PRATICAR VETORES! ===\n");
    printf("Missao 2: O Recorde do Campeonato (Final UTFPR)\n\n");

    for (i = 0; i < 5; i++) {
        printf("Piloto #%d: %d pts\n", i + 1, pts[i]);
    }

    for (i = 1; i < 5; i++) {
        if (pts[i] > recorde) {
            recorde = pts[i];
            campeaoIndex = i;
        }
    }

    printf("\n--------------------------------\n");
    printf("Maior pontuacao: %d pts!\n", recorde);
    printf("Piloto campeao: Piloto #%d [Trofeu de Ouro]\n", campeaoIndex + 1);

    return 0;
}
