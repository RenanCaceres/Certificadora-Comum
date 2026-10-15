#include <stdio.h>
#include <string.h>
struct Produto {
char nome[50];
float preco;
int quantidade;
};
int main() {
struct Produto item;
float total;
printf("Nome do produto: ");
scanf(" %[^\n]", item.nome);
printf("Preco unitario: ");
scanf("%f", &item.preco);
printf("Quantidade: ");
scanf("%d", &item.quantidade);
total = item.preco * item.quantidade;
printf("--- Nota da compra ---\n");
printf("%s x%d = R$ %.2f\n", item.nome, item.quantidade, total);
return 0;
}
