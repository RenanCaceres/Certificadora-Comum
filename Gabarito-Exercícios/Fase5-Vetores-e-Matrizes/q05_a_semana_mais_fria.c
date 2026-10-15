#include <stdio.h>
int main() {
int termometros[7];
int i, menor;
for (i = 0; i < 7; i++) {
printf("Temperatura do dia %d: ", i + 1);
scanf("%d", &termometros[i]);
}
menor = termometros[0];
for (i = 1; i < 7; i++) {
if (termometros[i] < menor) {
menor = termometros[i];
}
}
printf("A temperatura mais fria da semana foi: %d\n", menor);
return 0;
}
