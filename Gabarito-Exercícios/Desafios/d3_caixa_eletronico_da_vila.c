#include <stdio.h>

void mostrarMenu() {
    printf("\n===== CAIXA ELETRONICO =====\n");
    printf("1 - Depositar\n");
    printf("2 - Sacar\n");
    printf("3 - Ver saldo\n");
    printf("4 - Sair\n");
}

int depositar(int saldo, int valor) {
    return saldo + valor;
}

int sacar(int saldo, int valor) {
    if (valor > saldo) {
        printf("Saldo insuficiente!\n");
        return saldo;
    }
    return saldo - valor;
}

void mostrarSaldo(int saldo) {
    printf("Saldo atual: R$ %d\n", saldo);
}

int main() {
    int saldo = 100, opcao, valor;
    int rodando = 1;

    while (rodando == 1) {
        mostrarMenu();
        printf("Escolha: ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                printf("Valor a depositar: ");
                scanf("%d", &valor);
                saldo = depositar(saldo, valor);
                mostrarSaldo(saldo);
                break;
            case 2:
                printf("Valor a sacar: ");
                scanf("%d", &valor);
                saldo = sacar(saldo, valor);
                mostrarSaldo(saldo);
                break;
            case 3:
                mostrarSaldo(saldo);
                break;
            case 4:
                printf("Encerrando sessao...\n");
                rodando = 0;
                break;
            default:
                printf("Opcao invalida!\n");
        }
    }

    return 0;
}
