#include <stdio.h>

void mostrarTriplo(int numero) {
    printf("Triplo: %d\n", numero * 3);
}

int main() {
    mostrarTriplo(4);
    mostrarTriplo(10);
    mostrarTriplo(-2);

    return 0;
}
