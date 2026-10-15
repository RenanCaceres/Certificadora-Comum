#include <stdio.h>
#include <string.h>
struct Livro {
char titulo[80];
int ano;
float preco;
};
int main() {
struct Livro livro1;
strcpy(livro1.titulo, "O Pequeno Programador");
livro1.ano = 2021;
livro1.preco = 39.90;
printf("Titulo: %s\n", livro1.titulo);
printf("Ano: %d\n", livro1.ano);
printf("Preco: R$ %.2f\n", livro1.preco);
return 0;
}
