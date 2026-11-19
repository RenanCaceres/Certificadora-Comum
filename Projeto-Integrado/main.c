#include <stdio.h>

#define MAX_CADASTROS 50

typedef struct {
    char nome[100];
    int idade;
    char cidadeNascimento[50];
    char rua[50];
    char bairro[50];
    int numeroCasa;
    char cep[10];
} Pessoa;

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

char perguntarSeRepete(void) {
    char resposta;

    printf("\nDeseja cadastrar outra pessoa? (s/n): ");
    scanf(" %c", &resposta);

    return resposta;
}

void cadastrarPessoa(Pessoa pessoas[], int i) {
    printf("\n--- CADASTRO %d ---\n", i + 1);

    printf("Nome: ");
    scanf(" %99[^\n]", pessoas[i].nome);

    pessoas[i].idade = lerIdade();

    printf("Cidade de nascimento: ");
    scanf(" %49[^\n]", pessoas[i].cidadeNascimento);

    printf("Rua: ");
    scanf(" %49[^\n]", pessoas[i].rua);

    printf("Bairro: ");
    scanf(" %49[^\n]", pessoas[i].bairro);

    printf("Numero da casa: ");
    scanf("%d", &pessoas[i].numeroCasa);

    printf("CEP: ");
    scanf("%9s", pessoas[i].cep);

    printf("\nCadastro realizado com sucesso!\n");
}

void listarPessoas(Pessoa pessoas[], int total) {
    int i;
    int somaIdades = 0;

    printf("\n========================================\n");
    printf("        DADOS DE TODAS AS PESSOAS       \n");
    printf("========================================\n");

    for (i = 0; i < total; i++) {
        printf("\n--- Pessoa %d ---\n", i + 1);
        printf("Nome: %s\n", pessoas[i].nome);
        printf("Idade: %d\n", pessoas[i].idade);
        printf("Cidade de nascimento: %s\n", pessoas[i].cidadeNascimento);
        printf("Rua: %s\n", pessoas[i].rua);
        printf("Bairro: %s\n", pessoas[i].bairro);
        printf("Numero: %d\n", pessoas[i].numeroCasa);
        printf("CEP: %s\n", pessoas[i].cep);

        somaIdades += pessoas[i].idade;
    }

    printf("\n----------------------------------------\n");
    printf("Total de pessoas cadastradas: %d\n", total);
    if (total > 0) {
        printf("Media de idade: %.1f anos\n", (float)somaIdades / total);
    }
}

int main(void) {
    Pessoa pessoas[MAX_CADASTROS];
    int totalCadastros = 0;
    char repetir;

    do {
        if (totalCadastros >= MAX_CADASTROS) {
            printf("\nLimite maximo de cadastros atingido (%d pessoas)!\n", MAX_CADASTROS);
            break;
        }

        cadastrarPessoa(pessoas, totalCadastros);
        totalCadastros++;

        repetir = perguntarSeRepete();
    } while (repetir == 's' || repetir == 'S');

    listarPessoas(pessoas, totalCadastros);

    printf("\nPrograma encerrado.\n");

    return 0;
}
