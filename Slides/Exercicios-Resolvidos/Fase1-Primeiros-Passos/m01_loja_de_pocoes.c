#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 1: Primeiros Passos em C
 * Apresentado por: Lauren Marçulo
 * 
 * VAMOS PRATICAR!
 * Missão 1: A Loja de Poções do Mago Merlin
 * 
 * História:
 * Antes de partir para a batalha, o aventureiro entra na loja de poções do Mago Merlin.
 * Cada Poção de Vida custa 12.50 moedas de ouro e cada Poção de Mana custa 15.00 moedas.
 * O sistema precisa ler a quantidade de cada poção desejada e calcular a conta final!
 * 
 * Missão:
 * 1. Crie variáveis inteiras (int) para a quantidade de poções de Vida e de Mana;
 * 2. Leia (scanf) quantas poções de cada tipo o jogador deseja adquirir;
 * 3. Calcule o valor total (float) multiplicando as quantidades pelos preços;
 * 4. Exiba (printf) o total a pagar formatado com duas casas decimais (%.2f).
 */

int main(void) {
    int vida, mana;
    float total;

    printf("=== VAMOS PRATICAR! ===\n");
    printf("Missao 1: A Loja de Pocoes do Mago Merlin\n\n");

    printf("Digite a quantidade de Pocoes de Vida (R$ 12.50 cada): ");
    scanf("%d", &vida);

    printf("Digite a quantidade de Pocoes de Mana (R$ 15.00 cada): ");
    scanf("%d", &mana);

    total = (vida * 12.50f) + (mana * 15.00f);

    printf("\n----------------------------------------\n");
    printf("Resumo da compra:\n");
    printf("- %d Pocao(oes) de Vida\n", vida);
    printf("- %d Pocao(oes) de Mana\n", mana);
    printf("Total a pagar: %.2f moedas de ouro!\n", total);

    return 0;
}
