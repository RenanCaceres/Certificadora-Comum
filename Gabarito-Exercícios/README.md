# Gabarito - Caderno de Missões: Programação em C (Fases 1 a 6)

Soluções de referência de todas as questões e desafios do projeto de extensão.
Cada solução é **uma** resposta possível; variações com o mesmo comportamento
(por exemplo, `while` no lugar de `for`, ou `x = x + 1` no lugar de `x++`)
também estão corretas.

## Estrutura

- `Fase1-Primeiros-Passos/`: Q1 a Q5 — variáveis, constantes, expressões,
  entrada e saída, laços de repetição
- `Fase2-Decisoes/`: Q6 a Q10 — `if`, `else`, `else if`, `switch`, depuração
- `Fase3-Lacos-de-Repeticao/`: Q1 a Q10 — `while`, `do while`, `for`,
  contadores, `break`, `continue`
- `Fase4-Modularizacao/`: Q1 a Q10 — procedimentos, funções, parâmetros,
  valor de retorno
- `Fase5-Vetores-e-Matrizes/`: Q1 a Q10 — vetores (1D), matrizes (2D), índices, busca, maior/menor, acumulador
- `Fase6-Struct/`: Q1 a Q10 — `struct`, campos, operador `.`, vetor de struct, structs em funções e ponteiros (`->`)
- `Desafios/`: desafios finais, um por arquivo
  - `d1_escada_do_castelo_niveis_1_2.c` e `d1_escada_do_castelo_nivel_3.c`
    — Fases 1-2 · laços aninhados
  - `d2_batalha_contra_o_dragao.c` — Fases 1-2 · laço + `switch` + `if`
  - `d3_numero_secreto.c` — Fases 1-2 · laço com `break`
  - `d1_padrao_do_escudo.c` — Fases 3-4 · laços aninhados + condição composta
  - `d2_base_secreta.c` — Fases 3-4 · `while` + contador de tentativas
  - `d3_caixa_eletronico_da_vila.c` — Fases 3-4 · menu com funções e
    procedimentos
  - `d1_caravana_de_mercadores.c` — Fases 5-6 · vetor + múltiplas estatísticas em um laço só
  - `d2_jogo_da_velha_matematico.c` — Fases 5-6 · matriz 3x3 + funções + diagonais
  - `d3_cofre_de_quatro_pinos.c` — Fases 5-6 · comparação posicional de vetores + `break`
- `Extras/`: material de apoio que não é solução direta de uma missão
  - `q10_caca_aos_erros_ORIGINAL_COM_ERROS.c` — código com defeito da
    Questão 10 (Fase 2), **não compila de propósito**
  - `q09_experimento_sem_break.c` — mesma solução da Questão 9 (Fase 2)
    sem o `break` do primeiro `case`, para demonstrar o *fall-through*;
    **gera aviso de propósito**

> Os arquivos `d1_*`, `d2_*` e `d3_*` de cada bloco (Fases 1-2, 3-4, 5-6) têm o
> mesmo prefixo porque cada bloco de fases tem seus próprios
> três desafios finais — o nome completo do arquivo (e não só o número)
> identifica qual desafio é qual.

## Como compilar e executar

```
gcc -Wall -Wextra arquivo.c -o programa
./programa            # Windows: programa.exe
```

**Observações:**
- `q10_..._ORIGINAL_COM_ERROS.c` não compila de propósito: é o código com
  defeito da Questão 10 da Fase 2, que o aluno precisa corrigir.
- `q09_experimento_sem_break.c` gera um aviso de *fall-through* também de
  propósito, para mostrar o que acontece sem o `break`.
- Todos os demais arquivos foram compilados com `gcc -Wall -Wextra` sem
  nenhum aviso.