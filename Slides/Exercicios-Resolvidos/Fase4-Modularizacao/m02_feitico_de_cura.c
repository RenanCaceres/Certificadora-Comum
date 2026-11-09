#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 4: Dividir para Programar (Modularização)
 * Apresentado por: Lorena Eduarda
 * 
 * VAMOS PRATICAR!
 * Missão 2: Feitiço de Cura do Mago (Procedimento com Parâmetro)
 * 
 * História:
 * O Mago da equipe aprendeu um feitiço sagrado para restaurar os pontos de vida (HP)
 * do herói ferido. O feitiço recebe a quantidade de energia mágica (mana) canalizada
 * e regenera exatamente o DOBRO desse valor em pontos de vida!
 * 
 * Missão:
 * 1. Crie o procedimento void usarCura(int magia) recebendo 1 parâmetro inteiro;
 * 2. Dentro dele, calcule e mostre: printf("Cura: +%d de Vida!\n", magia * 2);
 * 3. Na função main(), leia (scanf) a quantidade de energia mágica digitada pelo jogador;
 * 4. Chame usarCura(energia) passando a variável lida como argumento.
 */

void usarCura(int magia) {
    int vidaRecuperada = magia * 2;
    printf("\n[Brilho Esmeralda] O cajado do Mago se ilumina!\n");
    printf("Feitico de Cura bem-sucedido: +%d pontos de Vida (HP) restaurados!\n", vidaRecuperada);
}

int main(void) {
    int energia;

    printf("=== VAMOS PRATICAR MODULARIZAÇÃO! ===\n");
    printf("Missao 2: Feitico de Cura do Mago (Procedimento com Parametro)\n\n");

    printf("Digite a quantidade de energia magica (mana) a canalizar: ");
    scanf("%d", &energia);

    usarCura(energia);

    printf("\nStatus do heroi atualizado com sucesso!\n");

    return 0;
}
