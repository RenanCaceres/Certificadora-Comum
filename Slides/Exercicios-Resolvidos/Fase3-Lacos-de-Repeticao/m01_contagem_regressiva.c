#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 3: Laços de Repetição
 * Apresentado por: Lauren Marçulo
 * 
 * VAMOS PRATICAR LAÇOS!
 * Missão 1: A Contagem Regressiva do Foguete
 * 
 * História:
 * A guilda espacial prepara o lançamento da nave estelar em direção à nova galáxia.
 * O painel de comando central exige uma contagem regressiva de 10 até 1.
 * Os motores de dobra espacial só acionam com segurança após o término!
 * 
 * Missão:
 * 1. Inicie o laço for com o contador em 10 (int i = 10);
 * 2. Repita o laço enquanto o contador for maior ou igual a 1 (i >= 1);
 * 3. Decremente o contador de 1 em 1 com i--;
 * 4. Ao final do laço, exiba: "Ignicao! Foguete lancado com sucesso!".
 */

int main(void) {
    int i;

    printf("=== VAMOS PRATICAR LAÇOS! ===\n");
    printf("Missao 1: A Contagem Regressiva do Foguete\n\n");
    printf("Iniciando contagem de lancamento da nave...\n");

    for (i = 10; i >= 1; i--) {
        printf("%d...\n", i);
    }

    printf("\n----------------------------------------\n");
    printf("Ignicao dos motores! Foguete lancado com sucesso!\n");

    return 0;
}
