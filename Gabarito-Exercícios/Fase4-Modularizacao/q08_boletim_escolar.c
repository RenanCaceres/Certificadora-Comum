#include <stdio.h>

int calcularMedia(int nota1, int nota2, int nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

void mostrarResultado(int media) {
    if (media >= 6) {
        printf("Media %d - Aprovado!\n", media);
    } else {
        printf("Media %d - Reprovado!\n", media);
    }
}

int main() {
    int n1, n2, n3, media;

    printf("Nota 1: ");
    scanf("%d", &n1);
    printf("Nota 2: ");
    scanf("%d", &n2);
    printf("Nota 3: ");
    scanf("%d", &n3);

    media = calcularMedia(n1, n2, n3);
    mostrarResultado(media);

    return 0;
}
