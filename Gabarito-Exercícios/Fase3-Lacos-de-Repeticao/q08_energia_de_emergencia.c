#include <stdio.h>

int main() {
    int minutos;

    for (minutos = 20; minutos >= 1; minutos--) {
        printf("Faltam %d minuto(s) de energia de emergencia.\n", minutos);

        if (minutos == 5) {
            printf(">>> ALERTA: energia critica! <<<\n");
        }
    }

    printf("Energia esgotada!\n");

    return 0;
}
