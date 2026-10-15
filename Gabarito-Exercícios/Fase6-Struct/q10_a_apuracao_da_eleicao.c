#include <stdio.h>
#include <string.h>
struct Candidato {
char nome[40];
int votos;
};
int main() {
struct Candidato eleicao[3];
int i, maiorIndice;
strcpy(eleicao[0].nome, "Ana");
strcpy(eleicao[1].nome, "Bruno");
strcpy(eleicao[2].nome, "Carla");
for (i = 0; i < 3; i++) {
printf("Votos para %s: ", eleicao[i].nome);
scanf("%d", &eleicao[i].votos);
}
maiorIndice = 0;
for (i = 1; i < 3; i++) {
if (eleicao[i].votos > eleicao[maiorIndice].votos) {
maiorIndice = i;
}
}
printf("\n=== RESULTADO ===\n");
printf("Vencedor(a): %s com %d votos!\n", eleicao[maiorIndice].nome, eleicao[maiorIndice].votos);
return 0;
}
