#include <stdio.h>
#include <string.h>

/**
 * Try, Catch & Learn - Slides Fase 6: Struct
 * Apresentado por: Lorena Eduarda
 * 
 * VAMOS PRATICAR!
 * Missão 4: O Grimório do Livro
 * 
 * História & Contexto:
 * A biblioteca real quer catalogar os grimórios mágicos e livros históricos do reino.
 * 
 * Missão:
 * 1. Crie a struct Livro com titulo (char[]), ano (int) e preco (float);
 * 2. Declare a variável l e copie o título com strcpy;
 * 3. Atribua ano (2026) e preco (49.90) usando o operador ponto (.);
 * 4. Exiba cada campo formatado com printf.
 */

struct Livro {
    char titulo[60];
    int ano;
    float preco;
};

int main(void) {
    struct Livro l;

    strcpy(l.titulo, "O Guia do C");
    l.ano = 2026;
    l.preco = 49.90f;

    printf("=== VAMOS PRATICAR STRUCT! ===\n");
    printf("Missao 4: O Grimorio do Livro\n\n");
    printf("Livro catalogado: %s\n", l.titulo);
    printf("Ano de publicacao: %d\n", l.ano);
    printf("Preco do exemplar: R$ %.2f\n", l.preco);

    return 0;
}
