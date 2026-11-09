#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 1: Primeiros Passos em C
 * Apresentado por: Lauren Marçulo
 * 
 * VAMOS PRATICAR!
 * Missão 3: Calculadora de XP de Aventura
 * 
 * História:
 * Na guilda de aventureiros, o placar de missões calcula a pontuação de experiência (XP)
 * dos heróis com base em suas façanhas: cada monstro derrotado rende +100 XP,
 * enquanto cada armadilha ativada acidentalmente penaliza o aventureiro em -30 XP.
 * 
 * Missão:
 * 1. Crie uma variável char e leia a inicial do nome do herói usando scanf(" %c", &inicial);
 * 2. Leia a quantidade de monstros derrotados e armadilhas acionadas;
 * 3. Calcule o XP final: xp = (monstros * 100) - (armadilhas * 30);
 * 4. Exiba a inicial do herói (%c) e seu total de pontos (%d).
 */

int main(void) {
    char inicial;
    int monstros, armadilhas, xp;

    printf("=== VAMOS PRATICAR! ===\n");
    printf("Missao 3: Calculadora de XP de Aventura\n\n");

    printf("Digite a inicial do nome do heroi: ");
    scanf(" %c", &inicial);

    printf("Digite a quantidade de monstros derrotados: ");
    scanf("%d", &monstros);

    printf("Digite a quantidade de armadilhas acionadas: ");
    scanf("%d", &armadilhas);

    xp = (monstros * 100) - (armadilhas * 30);

    printf("\n----------------------------------------\n");
    printf("Status final da jornada:\n");
    printf("Heroi [%c] concluiu a missao com %d pontos de XP!\n", inicial, xp);

    return 0;
}
