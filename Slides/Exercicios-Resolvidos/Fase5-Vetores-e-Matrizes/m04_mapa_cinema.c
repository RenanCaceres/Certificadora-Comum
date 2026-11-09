#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 5: Vetores e Matrizes
 * Apresentado por: Lauren Marçulo
 * 
 * VAMOS PRATICAR MATRIZES!
 * Missão 4: O Mapa da Sala de Cinema
 * 
 * História:
 * Uma sala de cinema retrô possui 2 fileiras com 3 assentos cada.
 * O valor 1 significa poltrona ocupada, e o valor 0 significa livre.
 * 
 * Missão:
 * 1. Mapa da sala: int cinema[2][3] = {{1, 0, 1}, {0, 1, 1}};
 * 2. Crie um contador de espectadores: int ocupados = 0;
 * 3. Percorra a matriz inteira com dois laços for;
 * 4. Se cinema[i][j] == 1, incremente seu contador!
 */

int main(void) {
    int cinema[2][3] = {
        {1, 0, 1},
        {0, 1, 1}
    };
    int ocupados = 0;
    int livres = 0;
    int i, j;

    printf("=== VAMOS PRATICAR MATRIZES! ===\n");
    printf("Missao 4: O Mapa da Sala de Cinema\n\n");
    printf("Mapa de Assentos ([X] = Ocupado, [ ] = Livre):\n");

    for (i = 0; i < 2; i++) {
        printf("Fileira %d: ", i + 1);
        for (j = 0; j < 3; j++) {
            if (cinema[i][j] == 1) {
                printf("[X] ");
                ocupados++;
            } else {
                printf("[ ] ");
                livres++;
            }
        }
        printf("\n");
    }

    printf("\n--------------------------------\n");
    printf("Ingressos vendidos: %d\n", ocupados);
    printf("Poltronas disponiveis: %d\n", livres);

    return 0;
}
