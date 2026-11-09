#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 4: Dividir para Programar (Modularização)
 * Apresentado por: Lorena Eduarda
 * 
 * VAMOS PRATICAR!
 * Missão 3: Calculadora de Dano no Chefão (Função com return)
 * 
 * História:
 * Na batalha decisiva contra o Dragão Titânico, a guilda precisa calcular e GUARDAR
 * o poder destrutivo total do golpe do herói. O dano total corresponde à soma
 * entre o ataque básico da espada com o bônus elemental do encantamento mágico.
 * 
 * Missão:
 * 1. Crie a função int calcularDano(int arma, int bonus) que retorne (arma + bonus);
 * 2. Na main(), leia o dano da arma e o bônus mágico com scanf;
 * 3. Chame a função guardando o retorno em uma variável: total = calcularDano(arma, bonus);
 * 4. Exiba na tela o dano total calculado para a batalha.
 */

int calcularDano(int arma, int bonus) {
    return arma + bonus;
}

int main(void) {
    int arma, bonus, total;

    printf("=== VAMOS PRATICAR MODULARIZAÇÃO! ===\n");
    printf("Missao 3: Calculadora de Dano no Chefao (Funcao com return)\n\n");

    printf("Digite a forca de ataque da arma: ");
    scanf("%d", &arma);

    printf("Digite o valor do bonus magico elemental: ");
    scanf("%d", &bonus);

    total = calcularDano(arma, bonus);

    printf("\n----------------------------------------\n");
    printf("Golpe Desferido no Chefao:\n");
    printf("- Ataque basico da arma: %d\n", arma);
    printf("- Bonus magico: %d\n", bonus);
    printf("Dano total causado no Chefao: %d pontos de dano!\n", total);

    return 0;
}
