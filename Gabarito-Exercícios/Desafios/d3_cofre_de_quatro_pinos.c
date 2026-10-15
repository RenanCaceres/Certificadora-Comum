#include <stdio.h>
int main() {
int senha[4];
int tentativa[4];
int i, acertos;
int acertouTudo = 0;
int rodada;
senha[0] = 3; senha[1] = 7; senha[2] = 1; senha[3] = 9;
printf("=== COFRE DE 4 PINOS ===\n");
for (rodada = 1; rodada <= 5; rodada++) {
printf("\nTentativa %d de 5\n", rodada);
acertos = 0;
for (i = 0; i < 4; i++) {
printf("Pino %d (0-9): ", i + 1);
scanf("%d", &tentativa[i]);
}
for (i = 0; i < 4; i++) {
if (tentativa[i] == senha[i]) {
acertos++;
}
}
printf("Pinos corretos na posicao certa: %d de 4\n", acertos);
if (acertos == 4) {
printf("COFRE ABERTO!\n");
acertouTudo = 1;
break;
}
}
if (acertouTudo == 0) {
printf("\nTentativas esgotadas! O cofre permanece fechado.\n");
}
return 0;
}
