#include <stdio.h>

#define TAM_TEXTO 50

int lerIdade(void) {
    int idade;

    printf("Idade: ");
    scanf("%d", &idade);

    while (idade < 0 || idade > 120) {
        printf("Idade inválida! Digite uma idade entre 0 e 120: ");
        scanf("%d", &idade);
    }

    return idade;
}

void cadastrarPessoa(int numeroCadastro) {
    char nome[TAM_TEXTO];
    char cidadeNascimento[TAM_TEXTO];
    char rua[TAM_TEXTO];
    char bairro[TAM_TEXTO];
    char cep[10];
    int idade;
    int numeroCasa;

    printf("--- CADASTRO %d ---\n", numeroCadastro);

    printf("Nome: ");
    scanf("%49s", nome);

    idade = lerIdade();

    printf("Cidade de nascimento: ");
    scanf("%49s", cidadeNascimento);

    printf("Rua: ");
    scanf("%49s", rua);

    printf("Bairro: ");
    scanf("%49s", bairro);

    printf("Numero da casa: ");
    scanf("%d", &numeroCasa);

    printf("CEP: ");
    scanf("%9s", cep);

    printf("\nCadastro realizado com sucesso!\n");
    printf("\n--- DADOS CADASTRADOS ---\n");
    printf("Nome: %s\n", nome);
    printf("Idade: %d\n", idade);
    printf("Cidade de nascimento: %s\n", cidadeNascimento);
    printf("Rua: %s\n", rua);
    printf("Bairro: %s\n", bairro);
    printf("Numero: %d\n", numeroCasa);
    printf("CEP: %s\n", cep);
}

char perguntarSeRepete(void) {
    char resposta;

    printf("\nDeseja cadastrar outra pessoa? (s/n): ");
    scanf(" %c", &resposta);

    return resposta;
}

int main(void) {
    int totalCadastros = 0;
    char repetir;

    do {
        totalCadastros++;
        cadastrarPessoa(totalCadastros);
        repetir = perguntarSeRepete();
    } while (repetir == 's' || repetir == 'S');

    printf("\nTotal de pessoas cadastradas: %d\n", totalCadastros);
    printf("Programa encerrado.\n");

    return 0;
}