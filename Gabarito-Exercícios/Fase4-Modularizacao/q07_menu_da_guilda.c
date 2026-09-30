#include <stdio.h>

void mostrarMenu() {
    printf("===== MENU DA GUILDA =====\n");
    printf("1 - Ver missoes\n");
    printf("2 - Ver inventario\n");
    printf("3 - Sair\n");
}

void processarOpcao(int opcao) {
    switch (opcao) {
        case 1:
            printf("Exibindo missoes disponiveis...\n");
            break;
        case 2:
            printf("Exibindo inventario...\n");
            break;
        case 3:
            printf("Saindo da guilda...\n");
            break;
        default:
            printf("Opcao invalida!\n");
    }
}

int main() {
    int opcao;

    mostrarMenu();
    printf("Escolha: ");
    scanf("%d", &opcao);
    processarOpcao(opcao);

    return 0;
}
