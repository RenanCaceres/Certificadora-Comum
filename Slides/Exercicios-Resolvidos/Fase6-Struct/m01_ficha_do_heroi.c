#include <stdio.h>
#include <string.h>

/**
 * Try, Catch & Learn - Slides Fase 6: Struct
 * Apresentado por: Lorena Eduarda
 * 
 * VAMOS PRATICAR!
 * Missão 1: A Ficha do Herói
 * 
 * História & Contexto:
 * No RPG Try, Catch & Learn, cada aventureiro possui atributos únicos
 * agrupados em uma ficha.
 * 
 * Missão:
 * 1. Crie a struct Heroi com nome (char[]), nivel (int) e vida (float);
 * 2. Declare struct Heroi h1 no main();
 * 3. Use strcpy para o nome e o ponto (.) para atribuir nível e vida;
 * 4. Exiba a ficha de status com printf.
 */

struct Heroi {
    char nome[50];
    int nivel;
    float vida;
};

int main(void) {
    struct Heroi h1;

    strcpy(h1.nome, "Guerreiro C");
    h1.nivel = 10;
    h1.vida = 100.0f;

    printf("=== VAMOS PRATICAR STRUCT! ===\n");
    printf("Missao 1: A Ficha do Heroi\n\n");
    printf("Heroi: %s | Nivel: %d | Vida: %.1f HP\n", h1.nome, h1.nivel, h1.vida);

    return 0;
}
