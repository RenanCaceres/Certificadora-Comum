#include <stdio.h>

/**
 * Try, Catch & Learn - Slides Fase 2: O Programa Aprende a Decidir
 * Apresentado por: Lorena Eduarda
 * 
 * VAMOS PRATICAR!
 * Missão 1: O Guardião do Portal do Dragão (if / else)
 * 
 * História:
 * Seu aventureiro chegou ao Portal Mágico no piso mais profundo da masmorra.
 * O Guardião ancestral só libera a passagem aos heróis de nível 10 ou superior (>= 10).
 * Se o herói não tiver o nível mínimo exigido, o guardião barra sua entrada!
 * 
 * Missão:
 * 1. Crie uma variável inteira (int nivel) e leia o nível com scanf;
 * 2. Use a estrutura condicional if (nivel >= 10) para testar o nível;
 * 3. Se verdadeiro: exiba "Portal aberto! Boa sorte contra o Dragao!";
 * 4. Senão (else): exiba "Nivel insuficiente! Treine mais antes de entrar!".
 */

int main(void) {
    int nivel;

    printf("=== VAMOS PRATICAR! ===\n");
    printf("Missao 1: O Guardiao do Portal do Dragao (if / else)\n\n");

    printf("Digite o nivel atual do seu heroi: ");
    scanf("%d", &nivel);

    printf("\n----------------------------------------\n");
    if (nivel >= 10) {
        printf("Portal aberto! Boa sorte na batalha contra o Dragao!\n");
    } else {
        printf("Nivel insuficiente! O guardiao barrou a entrada.\n");
        printf("Treine mais nas florestas antes de enfrentar este perigo!\n");
    }

    return 0;
}
