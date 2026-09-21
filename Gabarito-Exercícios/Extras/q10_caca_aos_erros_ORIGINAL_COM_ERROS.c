#include <stdio.h>

int main() {
    int idade, opcao;

    printf("Quantos anos voce tem? ");
    scanf("%d", idade);

    if (idade = 18) {
        printf("Parabens, voce acabou de virar maior de idade!\n");
    }

    printf("Escolha: 1 - Jogar | 2 - Estudar\n");
    scanf("%d", &opcao);

    switch (opcao) {
        case 1:
            printf("Bora jogar!\n");
        case 2:
            printf("Bora estudar!\n")
            break;
    }

    return 0;
}
