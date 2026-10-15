#include <stdio.h>
#include <string.h>
struct Produto {
char nome[40];
float preco;
};
int main() {
struct Produto carrinho[4];
int i;
float total = 0;
strcpy(carrinho[0].nome, "Arroz");
carrinho[0].preco = 22.50;
strcpy(carrinho[1].nome, "Feijao");
carrinho[1].preco = 8.90;
strcpy(carrinho[2].nome, "Leite");
carrinho[2].preco = 4.50;
strcpy(carrinho[3].nome, "Pao");
carrinho[3].preco = 7.20;
printf("=== NOTA FISCAL ===\n");
for (i = 0; i < 4; i++) {
printf("%-10s R$ %.2f\n", carrinho[i].nome, carrinho[i].preco);
total = total + carrinho[i].preco;
}
printf("-------------------------\n");
printf("TOTAL: R$ %.2f\n", total);
return 0;
}
