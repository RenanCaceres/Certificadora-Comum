#include <stdio.h>
int main() {
int pontuacoes[6];
int i, maior;
for (i = 0; i < 6; i++) {
printf("Pontuacao do jogador %d: ", i + 1);
scanf("%d", &pontuacoes[i]);
}
maior = pontuacoes[0];
for (i = 1; i < 6; i++) {
if (pontuacoes[i] > maior) {
maior = pontuacoes[i];
}
}
printf("A maior pontuacao foi: %d\n", maior);
return 0;
}
