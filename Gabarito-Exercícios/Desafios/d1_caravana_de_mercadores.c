#include <stdio.h>
int main() {
int caravana[10];
int i, soma = 0, maior, menor;
float media;
for (i = 0; i < 10; i++) {
printf("Peso do item %d (kg): ", i + 1);
scanf("%d", &caravana[i]);
}
maior = caravana[0];
menor = caravana[0];
for (i = 0; i < 10; i++) {
soma = soma + caravana[i];
if (caravana[i] > maior) {
maior = caravana[i];
}
if (caravana[i] < menor) {
menor = caravana[i];
}
}
media = (float) soma / 10;
printf("--- Relatorio da caravana ---\n");
printf("Peso total: %d kg\n", soma);
printf("Peso medio: %.2f kg\n", media);
printf("Item mais pesado: %d kg\n", maior);
printf("Item mais leve: %d kg\n", menor);
if (soma > 500) {
printf("ALERTA: caravana acima do limite de 500 kg!\n");
} else {
printf("Peso dentro do limite seguro.\n");
}
return 0;
}
