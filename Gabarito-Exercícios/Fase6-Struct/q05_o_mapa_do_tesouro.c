#include <stdio.h>
#include <string.h>
struct Ponto {
int x;
int y;
};
void mostrarPonto(struct Ponto p) {
printf("(%d, %d)\n", p.x, p.y);
}
int main() {
struct Ponto origem;
struct Ponto destino;
origem.x = 0;
origem.y = 0;
destino.x = 5;
destino.y = 8;
printf("Ponto de origem: ");
mostrarPonto(origem);
printf("Ponto de destino: ");
mostrarPonto(destino);
return 0;
}
