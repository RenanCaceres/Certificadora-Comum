#include <stdio.h>
int main() {
int tabuleiro[2][2];
int i, j, soma = 0;
printf("=== TABULEIRO 2x2 ===\n");
for (i = 0; i < 2; i++) {
for (j = 0; j < 2; j++) {
printf("Valor em [%d][%d]: ", i, j);
scanf("%d", &tabuleiro[i][j]);
soma = soma + tabuleiro[i][j];
}
}
printf("Soma de todas as casas: %d\n", soma);
return 0;
}
