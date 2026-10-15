#include <stdio.h>
float calcularMedia(float notas[], int tamanho) {
int i;
float soma = 0;
for (i = 0; i < tamanho; i++) {
soma = soma + notas[i];
}
return soma / tamanho;
}
int main() {
float notas[4];
int i;
for (i = 0; i < 4; i++) {
printf("Nota %d: ", i + 1);
scanf("%f", &notas[i]);
}
printf("Media da turma: %.2f\n", calcularMedia(notas, 4));
return 0;
}
