#include <stdio.h>
#include <string.h>
struct Jogador {
char nome[30];
int vida;
int ataque;
};
void atacar(struct Jogador *alvo, int dano) {
alvo->vida = alvo->vida - dano;
}
int main() {
struct Jogador heroi;
strcpy(heroi.nome, "Cavaleiro");
heroi.vida = 100;
heroi.ataque = 15;
printf("%s comeca com %d de vida.\n", heroi.nome, heroi.vida);
atacar(&heroi, 30);
printf("%s foi atacado! Vida atual: %d\n", heroi.nome, heroi.vida);
atacar(&heroi, 20);
printf("%s foi atacado de novo! Vida atual: %d\n", heroi.nome, heroi.vida);
return 0;
}
