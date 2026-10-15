#include <stdio.h>
int main() {
int ingredientes[5] = {7, 14, 2, 30, 9};
int procurado, i, encontrado = 0;
printf("Digite o codigo do ingrediente: ");
scanf("%d", &procurado);
for (i = 0; i < 5; i++) {
if (ingredientes[i] == procurado) {
encontrado = 1;
break;
}
}
if (encontrado == 1) {
printf("Ingrediente %d esta na despensa!\n", procurado);
} else {
printf("Ingrediente %d NAO esta na despensa.\n", procurado);
}
return 0;
}
