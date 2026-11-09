#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 1: Primeiros Passos em C
 * Apresentado por: Lauren Marçulo
 * 
 * VAMOS PRATICAR!
 * Missão 2: Dividindo o Tesouro Pirata
 * 
 * História:
 * A tripulação do navio pirata encontrou um baú repleto de moedas de ouro em uma ilha remota.
 * O capitão determinou que o ouro será dividido igualmente entre os piratas.
 * As moedas que sobrarem da divisão inteira vão direto para o papagaio de estimação!
 * 
 * Missão:
 * 1. Receba (scanf) o total de moedas de ouro e a quantidade de piratas;
 * 2. Calcule quantas moedas cada pirata recebe utilizando a divisão inteira (/);
 * 3. Calcule quantas moedas sobram para o papagaio utilizando o operador resto (%);
 * 4. Exiba ambos os resultados na tela com printf.
 */

int main(void) {
    int moedas, piratas;
    int por_pirata, papagaio;

    printf("=== VAMOS PRATICAR! ===\n");
    printf("Missao 2: Dividindo o Tesouro Pirata\n\n");

    printf("Digite o total de moedas no bau: ");
    scanf("%d", &moedas);

    printf("Digite o numero de piratas na tripulacao: ");
    scanf("%d", &piratas);

    por_pirata = moedas / piratas;
    papagaio = moedas % piratas;

    printf("\n----------------------------------------\n");
    printf("Divisao do tesouro pirata:\n");
    printf("- Cada pirata recebe: %d moeda(s)\n", por_pirata);
    printf("- Sobra para o papagaio: %d moeda(s)\n", papagaio);

    return 0;
}
