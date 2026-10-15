#include <stdio.h>
#include <string.h>
struct Aluno {
char nome[50];
float nota1;
float nota2;
};
int main() {
struct Aluno turma[3];
int i;
float media;
for (i = 0; i < 3; i++) {
printf("--- Aluno %d ---\n", i + 1);
printf("Nome: ");
scanf(" %[^\n]", turma[i].nome);
printf("Nota 1: ");
scanf("%f", &turma[i].nota1);
printf("Nota 2: ");
scanf("%f", &turma[i].nota2);
}
printf("\n=== BOLETIM ===\n");
for (i = 0; i < 3; i++) {
media = (turma[i].nota1 + turma[i].nota2) / 2;
printf("%s - Media: %.1f\n", turma[i].nome, media);
}
return 0;
}
