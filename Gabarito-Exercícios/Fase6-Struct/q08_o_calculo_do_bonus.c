#include <stdio.h>
#include <string.h>
struct Funcionario {
char nome[50];
float salario;
};
float calcularBonus(struct Funcionario f) {
return f.salario * 0.10;
}
int main() {
struct Funcionario pessoa;
float bonus;
printf("Nome do funcionario: ");
scanf(" %[^\n]", pessoa.nome);
printf("Salario: ");
scanf("%f", &pessoa.salario);
bonus = calcularBonus(pessoa);
printf("%s recebera um bonus de R$ %.2f\n", pessoa.nome, bonus);
return 0;
}
