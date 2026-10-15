#include <stdio.h>
int main() {
int cartas[6] = {12, 45, 7, 90, 33, 61};
int i;
printf("As cartas da mao sao: ");
for (i = 0; i < 6; i++) {
printf("%d ", cartas[i]);
}
printf("\n");
printf("Carta na posicao 0: %d\n", cartas[0]);
printf("Carta na posicao 3: %d\n", cartas[3]);
printf("Carta na posicao 5: %d\n", cartas[5]);
return 0;
}
