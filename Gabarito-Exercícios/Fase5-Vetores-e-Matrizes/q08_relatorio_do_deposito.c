#include <stdio.h>
void exibirEstoque(int estoque[], int tamanho) {
int i;
for (i = 0; i < tamanho; i++) {
printf("Prateleira %d: %d caixas\n", i, estoque[i]);
}
}
int main() {
int estoque[6];
int i;
for (i = 0; i < 6; i++) {
printf("Caixas na prateleira %d: ", i);
scanf("%d", &estoque[i]);
}
printf("--- Relatorio do deposito ---\n");
exibirEstoque(estoque, 6);
return 0;
}
