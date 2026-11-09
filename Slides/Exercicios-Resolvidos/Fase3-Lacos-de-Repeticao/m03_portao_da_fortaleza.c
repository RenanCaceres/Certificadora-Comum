#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 3: Laços de Repetição
 * Apresentado por: Lauren Marçulo
 * 
 * VAMOS PRATICAR LAÇOS!
 * Missão 3: O Portão Rúnico da Fortaleza
 * 
 * História:
 * O portão da fortaleza sagrada está selado e só abre com o código numérico 1234.
 * O guardião continuará barrando aventureiros enquanto a senha estiver incorreta.
 * O programa deve repetir a solicitação até que o código correto seja digitado!
 * 
 * Missão:
 * 1. Crie a variável int senha e leia o primeiro palpite do aventureiro;
 * 2. Use o laço while (senha != 1234) para manter a fortaleza trancada;
 * 3. Dentro do laço, informe "Codigo incorreto!" e leia uma nova tentativa;
 * 4. Ao acertar, saia do laço e exiba: "Portao liberado! Acesso concedido!".
 */

int main(void) {
    int senha;

    printf("=== VAMOS PRATICAR LAÇOS! ===\n");
    printf("Missao 3: O Portao Runico da Fortaleza\n\n");

    printf("Digite o codigo runico de 4 digitos para abrir o portao: ");
    scanf("%d", &senha);

    while (senha != 1234) {
        printf("Codigo incorreto! O portao permanece selado. Tente de novo: ");
        scanf("%d", &senha);
    }

    printf("\n----------------------------------------\n");
    printf("Portao liberado! Seja bem-vindo a Fortaleza Sagrada!\n");

    return 0;
}
