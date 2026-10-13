#include <stdio.h>

/*
    PROGRAMA: Cadastro de Pessoa (Para até o capitulo 2)
    ---------------------------------------------------
    Este programa apenas CADASTRA uma pessoa e depois
    exibe os dados na tela.
    Agora o programa cadastra várias pessoas usando Laços de repetição:
    - while    -> valida a idade antes de seguir
    - do/while -> laco que executa PELO MENOS UMA VEZ
                    (valida o numero da casa e pergunta se repete)
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

    int totalCadastros = 0;  // conta quantas pessoas foram cadastradas
    char repetir;            // guarda a resposta 's' ou 'n'

    // ----- LAÇO DO-WHILE (controlado por condição) ------ //
    // Cadastra pelo menos uma pessoa e repete
    // enquanto o usuario responder 's'.

    // ----- CADASTRO -----

    do{
        printf("--- CADASTRO %d ---\n", totalCadastros + 1);
    
        printf("Nome: ");
        scanf("%s", nome); // %s le uma palavra (sem espacos)
        
    // Laço while: só sai quando a idade estiver válida
        printf("Idade: ");
        scanf("%d", &idade);
        while (idade < 0 || idade > 120) {
            printf("Idade inválida! Digite uma idade entre 0 - 120: ");
            scanf("%d", &idade);
        }
    
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

        totalCadastros++;
    
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

        // pergunta se o usuario quer cadastrar outra pessoa.
        // o espaço antes de %c faz o scanf ignorar o enter.
        printf("\nDeseja cadastrar outra pessoa? (s/n): ");
        scanf(" %c", &repetir);
        
    } while (repetir == 's' || repetir == 'S');

    printf("\nTotal de pessoas cadastradas: %d\n", totalCadastros);
    printf("Programa encerrado"\n);

    return 0;
}
