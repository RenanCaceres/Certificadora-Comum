#include <stdio.h>

int main() {
    int i;

    printf("=== CONTAGEM DE PORTAIS ===\n");

    for (i = 1; i <= 20; i++) {
        if (i == 13) {
            continue;
        }
        printf("Portal %d: liberado\n", i);
    }

    printf("Contagem finalizada.\n");

    return 0;
}
