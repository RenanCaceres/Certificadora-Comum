#include <stdio.h>
#include <string.h>
struct Carro {
char modelo[40];
int ano;
float preco;
};
void mostrarCarro(struct Carro c) {
printf("%s (%d) - R$ %.2f\n", c.modelo, c.ano, c.preco);
}
int main() {
struct Carro garagem[3];
int i;
strcpy(garagem[0].modelo, "Fusca");
garagem[0].ano = 1978;
garagem[0].preco = 25000.00;
strcpy(garagem[1].modelo, "Civic");
garagem[1].ano = 2020;
garagem[1].preco = 98000.00;
strcpy(garagem[2].modelo, "Gol");
garagem[2].ano = 2015;
garagem[2].preco = 42000.00;
printf("=== GARAGEM ===\n");
for (i = 0; i < 3; i++) {
mostrarCarro(garagem[i]);
}
return 0;
}
