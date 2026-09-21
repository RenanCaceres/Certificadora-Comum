# Gabarito - Caderno de Missoes: Programacao em C (Fases 1 e 2)

Solucoes de referencia das 10 questoes e dos 3 desafios. Cada solucao e uma
resposta possivel; variacoes com o mesmo comportamento tambem estao corretas.

## Estrutura
- `Fase1-Primeiros-Passos/`: Q1 a Q5 (variaveis, constantes, expressoes, E/S, lacos)
- `Fase2-Decisoes/`: Q6 a Q10 (if, else, else if, switch, depuracao)
- `Desafios/`: D1 (lacos aninhados), D2 (batalha contra o dragao), D3 (numero secreto)
- `Extras/`: codigo original com erros da Q10 e o experimento sem `break` da Q9

## Como compilar e executar
```
gcc -Wall -Wextra arquivo.c -o programa
./programa          # Windows: programa.exe
```
Nota: `q10_..._ORIGINAL_COM_ERROS.c` nao compila de proposito, e `q09_experimento_sem_break.c` gera aviso de fall-through de proposito.
