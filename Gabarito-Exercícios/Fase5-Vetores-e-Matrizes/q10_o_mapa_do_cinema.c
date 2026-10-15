#include <stdio.h>
int main() {
int assentos[2][3] = {
{1, 0, 1},
{0, 0, 1}
};
int i, j, ocupados = 0, livres = 0;
printf("=== MAPA DO CINEMA ===\n");
for (i = 0; i < 2; i++) {
for (j = 0; j < 3; j++) {
if (assentos[i][j] == 1) {
printf("[X] ");
ocupados++;
} else {
printf("[ ] ");
livres++;
}
}
printf("\n");
}
printf("Assentos ocupados: %d\n", ocupados);
printf("Assentos livres: %d\n", livres);
return 0;
}
