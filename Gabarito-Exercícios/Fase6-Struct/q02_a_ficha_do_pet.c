#include <stdio.h>
#include <string.h>
struct Animal {
char nome[30];
char especie[30];
int idade;
};
int main() {
struct Animal pet1;
strcpy(pet1.nome, "Rex");
strcpy(pet1.especie, "Cachorro");
pet1.idade = 3;
printf("=== FICHA DO PET ===\n");
printf("Nome: %s\n", pet1.nome);
printf("Especie: %s\n", pet1.especie);
printf("Idade: %d ano(s)\n", pet1.idade);
return 0;
}
