#include <stdio.h>
void preencherMatriz(int m[3][3]) {
int i, j;
for (i = 0; i < 3; i++) {
for (j = 0; j < 3; j++) {
printf("Valor da casa [%d][%d]: ", i, j);
scanf("%d", &m[i][j]);
}
}
}
int somarDiagonalPrincipal(int m[3][3]) {
int i, soma = 0;
for (i = 0; i < 3; i++) {
soma = soma + m[i][i];
}
return soma;
}
int somarDiagonalSecundaria(int m[3][3]) {
int i, soma = 0;
for (i = 0; i < 3; i++) {
soma = soma + m[i][2 - i];
}
return soma;
}
void exibirMatriz(int m[3][3]) {
int i, j;
for (i = 0; i < 3; i++) {
for (j = 0; j < 3; j++) {
printf("%4d", m[i][j]);
}
printf("\n");
}
}
int main() {
int jogoDaVelha[3][3];
printf("=== PREENCHENDO O TABULEIRO 3x3 ===\n");
preencherMatriz(jogoDaVelha);
printf("\n--- Tabuleiro ---\n");
exibirMatriz(jogoDaVelha);
printf("\nSoma da diagonal principal: %d\n", somarDiagonalPrincipal(jogoDaVelha));
printf("Soma da diagonal secundaria: %d\n", somarDiagonalSecundaria(jogoDaVelha));
return 0;
}
