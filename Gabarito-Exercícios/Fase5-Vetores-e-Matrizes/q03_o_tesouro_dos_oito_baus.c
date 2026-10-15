#include <stdio.h>
int main() {
int moedas[8];
int i, total = 0;
for (i = 0; i < 8; i++) {
printf("Moedas no bau %d: ", i);
scanf("%d", &moedas[i]);
total = total + moedas[i];
}
printf("Total de moedas do tesouro: %d\n", total);
return 0;
}
