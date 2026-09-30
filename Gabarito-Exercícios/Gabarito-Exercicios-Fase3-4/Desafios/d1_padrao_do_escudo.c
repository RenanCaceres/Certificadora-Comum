#include <stdio.h>

int main() {
    int linha, coluna, n = 5;

    for (linha = 1; linha <= n; linha++) {
        for (coluna = 1; coluna <= n; coluna++) {
            if (linha == coluna || linha + coluna == n + 1) {
                printf("X");
            } else {
                printf(".");
            }
        }
        printf("\n");
    }

    return 0;
}
