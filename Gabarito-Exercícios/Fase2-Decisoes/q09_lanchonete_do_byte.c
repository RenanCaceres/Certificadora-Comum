#include <stdio.h>

int main() {
    int opcao;

    printf("=== LANCHONETE DO BYTE ===\n");
    printf("1 - X-Burger  (R$ 18)\n");
    printf("2 - Pizza     (R$ 9)\n");
    printf("3 - Suco      (R$ 6)\n");
    printf("Escolha: ");
    scanf("%d", &opcao);

    switch (opcao) {
        case 1:
            printf("Voce pediu X-Burger. Valor: R$ 18\n");
            break;
        case 2:
            printf("Voce pediu Pizza. Valor: R$ 9\n");
            break;
        case 3:
            printf("Voce pediu Suco. Valor: R$ 6\n");
            break;
        default:
            printf("Opcao invalida!\n");
    }

    return 0;
}
