#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 2: O Programa Aprende a Decidir
 * Apresentado por: Lorena Eduarda
 * 
 * VAMOS PRATICAR!
 * Missão 2: Radar Climático da Expedição (if / else if / else)
 * 
 * História:
 * A nave de exploração pousou em um planeta inexplorado no setor Gama.
 * O sensor atmosférico do traje espacial realizou a leitura da temperatura:
 * - Se temp >= 30: Clima perigoso! "Esta muito quente! Ativar refrigeracao!"
 * - Se temp >= 20: Clima estavel! "Temperatura agradavel! Liberado para explorar!"
 * - Senão (< 20): Clima frio! "Esta frio! Ativar aquecedores termicos!"
 * 
 * Missão:
 * 1. Receba (scanf) o valor da temperatura em graus medido pelo sensor;
 * 2. Teste a 1ª condição com if (temp >= 30);
 * 3. Teste a 2ª condição encadeada com else if (temp >= 20);
 * 4. Use else para todas as temperaturas abaixo de 20 graus.
 */

int main(void) {
    int temp;

    printf("=== VAMOS PRATICAR! ===\n");
    printf("Missao 2: Radar Climatico da Expedicao (if / else if / else)\n\n");

    printf("Digite a temperatura medida pelo sensor (em graus Celsius): ");
    scanf("%d", &temp);

    printf("\n----------------------------------------\n");
    printf("Diagnostico do sensor atmosferico:\n");

    if (temp >= 30) {
        printf("Esta muito quente (%d C)! Ativar sistema de refrigeracao do traje!\n", temp);
    } else if (temp >= 20) {
        printf("Temperatura agradavel (%d C)! Tripulacao liberada para explorar!\n", temp);
    } else {
        printf("Esta frio (%d C)! Ativar sistema de aquecimento termico!\n", temp);
    }

    return 0;
}
