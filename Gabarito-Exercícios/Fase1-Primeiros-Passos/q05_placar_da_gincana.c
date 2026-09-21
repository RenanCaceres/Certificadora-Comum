#include <stdio.h>

int main() {
    int i;
    float nota, total = 0, media;

    for (i = 1; i <= 5; i++) {
        printf("Pontos da equipe na prova %d: ", i);
        scanf("%f", &nota);
        total = total + nota;
    }

    media = total / 5;

    printf("Total: %.2f\n", total);
    printf("Media: %.2f\n", media);

    return 0;
}
