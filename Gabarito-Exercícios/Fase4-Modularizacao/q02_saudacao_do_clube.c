#include <stdio.h>

void saudar(char inicial) {
    printf("Ola, %c! Seja bem-vindo(a) ao clube!\n", inicial);
}

int main() {
    saudar('R');
    saudar('L');
    saudar('M');

    return 0;
}
