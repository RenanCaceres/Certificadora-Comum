#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 6: Struct
 * Apresentado por: Lorena Eduarda
 * 
 * VAMOS PRATICAR!
 * Missão 2: O Caixa da Taverna
 * 
 * História & Contexto:
 * A taverna da guilda precisa emitir o recibo de poções mágicas vendidas aos aventureiros.
 * 
 * Missão:
 * 1. Crie a struct Item com nome (char[]), preco (float) e quantidade (int);
 * 2. Inicialize uma poção com preco 15.50 e quantidade 4;
 * 3. Calcule o total multiplicando preco * quantidade;
 * 4. Exiba o nome do item e o valor da conta.
 */

struct Item {
    char nome[50];
    float preco;
    int quantidade;
};

int main(void) {
    struct Item p = {"Pocao Vida", 15.50f, 4};
    float total = p.preco * (float)p.quantidade;

    printf("=== VAMOS PRATICAR STRUCT! ===\n");
    printf("Missao 2: O Caixa da Taverna\n\n");
    printf("Item: %s\n", p.nome);
    printf("Preco unitario: R$ %.2f\n", p.preco);
    printf("Quantidade: %d unidades\n", p.quantidade);
    printf("Total a pagar: R$ %.2f\n", total);

    return 0;
}
