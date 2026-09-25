#include <stdio.h>

/*
    PROGRAMA: Cadastro de Pessoa (Para até o capitulo 2)
    ---------------------------------------------------
    Este programa apenas CADASTRA uma pessoa e depois
    exibe os dados na tela.
*/

int main() {

    // Variaveis que vao guardar os dados da pessoa.
    // Usamos vetores de char (strings) pois em C nao existe
    // um tipo pronto para nomes/enderecos.
    char nome[50];
    char cidadeNascimento[50];
    char rua[50];
    char bairro[50];

    int idade;      // idade eh um numero inteiro
    int numero;     // numero da casa tambem eh inteiro
    char cep[10];   // CEP guardado como texto (pode ter traco: 12345-678)

    // ----- CADASTRO -----
    printf("--- CADASTRO ---\n");

    printf("Nome: ");
    scanf("%s", nome); // %s le uma palavra (sem espacos)

    printf("Idade: ");
    scanf("%d", &idade);

    printf("Cidade de nascimento: ");
    scanf("%s", cidadeNascimento);

    printf("Rua: ");
    scanf("%s", rua);

    printf("Bairro: ");
    scanf("%s", bairro);

    printf("Numero da casa: ");
    scanf("%d", &numero);

    printf("CEP: ");
    scanf("%s", cep);

    printf("\nCadastro realizado com sucesso!\n");

    // ----- EXIBICAO -----
    printf("\n--- DADOS CADASTRADOS ---\n");
    printf("Nome: %s\n", nome);
    printf("Idade: %d\n", idade);
    printf("Cidade de nascimento: %s\n", cidadeNascimento);
    printf("Rua: %s\n", rua);
    printf("Bairro: %s\n", bairro);
    printf("Numero: %d\n", numero);
    printf("CEP: %s\n", cep);

    return 0;
}