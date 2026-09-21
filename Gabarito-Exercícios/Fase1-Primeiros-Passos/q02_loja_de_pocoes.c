#include <stdio.h>

#define PRECO_POCAO 15

int main() {
    int quantidade, dinheiro, total, troco;

    printf("Quantas pocoes voce quer? ");
    scanf("%d", &quantidade);
    printf("Quanto dinheiro voce tem? ");
    scanf("%d", &dinheiro);

    total = quantidade * PRECO_POCAO;
    troco = dinheiro - total;

    printf("Total: R$ %d\n", total);
    printf("Troco: R$ %d\n", troco);

    return 0;
}
