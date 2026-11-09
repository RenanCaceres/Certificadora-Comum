#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 6: Struct
 * Apresentado por: Lorena Eduarda
 * 
 * VAMOS PRATICAR!
 * Missão 3: O Mapa do Tesouro
 * 
 * História & Contexto:
 * Um mapa pirata marca a localização exata de um baú de dobrões em um grid cartesiano (x, y).
 * 
 * Missão:
 * 1. Crie a struct Ponto com coordenadas x e y (int);
 * 2. Declare struct Ponto bau no main();
 * 3. Atribua as coordenadas x = 18 e y = 42;
 * 4. Exiba as coordenadas no formato (x, y).
 */

struct Ponto {
    int x;
    int y;
};

int main(void) {
    struct Ponto bau;

    bau.x = 18;
    bau.y = 42;

    printf("=== VAMOS PRATICAR STRUCT! ===\n");
    printf("Missao 3: O Mapa do Tesouro\n\n");
    printf("Bau localizado nas coordenadas: (%d, %d)\n", bau.x, bau.y);

    return 0;
}
