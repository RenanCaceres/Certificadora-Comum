#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 4: Dividir para Programar (Modularização)
 * Apresentado por: Lorena Eduarda
 * 
 * VAMOS PRATICAR!
 * Missão 1: Grito de Guerra da Guilda (Procedimento void)
 * 
 * História:
 * Toda vez que a equipe de aventureiros encontra inimigos nas masmorras,
 * um aviso sonoro e visual de combate precisa ser exibido.
 * Em vez de repetir comandos printf espalhados pelo código, criamos um procedimento
 * reutilizável void que encapsula o alerta de batalha!
 * 
 * Missão:
 * 1. Crie o procedimento void alertaBatalha(void) antes da função main();
 * 2. Dentro dele, mostre: "=== ALERTA: INIMIGO A VISTA! ===" e "Preparem-se!";
 * 3. Na função main(), chame alertaBatalha() duas vezes seguidas;
 * 4. Observe a execução duplicada sem redundância de código-fonte.
 */

void alertaBatalha(void) {
    printf("=== ALERTA: INIMIGO A VISTA! ===\n");
    printf("Empunhem suas armas e preparem-se para o combate!\n\n");
}

int main(void) {
    printf("=== VAMOS PRATICAR MODULARIZAÇÃO! ===\n");
    printf("Missao 1: Grito de Guerra da Guilda (Procedimento void)\n\n");

    printf("Iniciando expedicao na Masmorra Sombria...\n");

    printf("\n-- Primeiro Encontro Hostil --\n");
    alertaBatalha();

    printf("-- Segundo Encontro Hostil --\n");
    alertaBatalha();

    printf("Combates encerrados. Missao de patrulha concluida com sucesso!\n");

    return 0;
}
