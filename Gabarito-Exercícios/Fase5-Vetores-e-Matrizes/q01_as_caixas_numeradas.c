#include <stdio.h>
int main() {
int numeros[5];
int i;
for (i = 0; i < 5; i++) {
printf("Digite o numero %d: ", i + 1);
scanf("%d", &numeros[i]);
}
printf("Voce digitou: ");
for (i = 0; i < 5; i++) {
printf("%d ", numeros[i]);
}
printf("\n");
return 0;
}
