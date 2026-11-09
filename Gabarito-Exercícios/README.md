# 💻 Gabarito Oficial — Caderno de Missões em C (Fases 1 a 6)

<div align="center">

### Resoluções de referência em linguagem C de todas as questões e desafios práticos

![Linguagem](https://img.shields.io/badge/linguagem-C-00599C?style=for-the-badge&logo=c&logoColor=white)
![Compilador](https://img.shields.io/badge/compilador-GCC-yellow?style=for-the-badge)
![Status](https://img.shields.io/badge/status-100%25%20Compil%C3%A1vel-2ea44f?style=for-the-badge)

</div>

---

## 🧭 Sobre este diretório

Aqui estão reunidas as **soluções oficiais em C** de todas as missões e desafios práticos dos Cadernos de Missões da disciplina de Fundamentos da Programação em C (**Try, Catch & Learn**).

Cada código representa **uma** solução de referência eficiente e idiomática. Em programação há múltiplas maneiras corretas de resolver o mesmo problema (por exemplo, usar `while` em vez de `for`, ou modularizar partes adicionais); contanto que o comportamento e as restrições sejam atendidos, a solução é válida.

> 📄 **Documentos Teóricos:** Os cadernos originais de enunciados e comentários em PDF estão localizados na pasta [**`Conteúdo-Teórico/`**](../Conteúdo-Teórico/README.md).
> 📽️ **Exercícios dos Slides:** Se você procura os exercícios específicos das apresentações das videoaulas, confira [**`Slides/Exercicios-Resolvidos/`**](../Slides/Exercicios-Resolvidos/README.md).

---

## 🗂️ Estrutura de Pastas e Conteúdo

| Pasta | Fases / Escopo | Descrição dos Conceitos e Exercícios |
|-------|:--------------:|---------------------------------------|
| [`Fase1-Primeiros-Passos/`](./Fase1-Primeiros-Passos/) | **Fase 1** | **Q1 a Q5**: variáveis, constantes, tipos primitivos, expressões, entrada/saída formatada e primeiros laços. |
| [`Fase2-Decisoes/`](./Fase2-Decisoes/) | **Fase 2** | **Q6 a Q10**: controle de fluxo, `if`, `else`, `else if`, `switch-case`, `break` e caça aos erros comuns. |
| [`Fase3-Lacos-de-Repeticao/`](./Fase3-Lacos-de-Repeticao/) | **Fase 3** | **Q1 a Q10**: laços `while`, `do-while` e `for`, variáveis contadoras, acumuladores e desvios de fluxo. |
| [`Fase4-Modularizacao/`](./Fase4-Modularizacao/) | **Fase 4** | **Q1 a Q10**: procedimentos `void`, funções com retorno, parâmetros, escopo de variáveis e protótipos. |
| [`Fase5-Vetores-e-Matrizes/`](./Fase5-Vetores-e-Matrizes/) | **Fase 5** | **Q1 a Q10**: vetores (1D), matrizes (2D), índices base 0, laços aninhados, busca e agregações. |
| [`Fase6-Struct/`](./Fase6-Struct/) | **Fase 6** | **Q1 a Q10**: estruturas heterogêneas (`struct`), operador `.`, vetores de struct, passagem para funções e ponteiros (`->`). |
| [`Desafios/`](./Desafios/) | **Fases 1 a 6** | Desafios finais integradores de cada bloco de fases (veja detalhamento abaixo). |
| [`Extras/`](./Extras/) | **Apoio** | Códigos didáticos especiais para demonstração de erros intencionais e fall-through. |

---

## 🏆 Desafios Finais Integradores (`Desafios/`)

Os desafios finais consolidam o conhecimento adquirido ao final de cada par de fases:

### ⚔️ Bloco 1 — Fases 1 e 2
- `d1_escada_do_castelo_niveis_1_2.c` e `d1_escada_do_castelo_nivel_3.c` — Laços aninhados e padrões visuais.
- `d2_batalha_contra_o_dragao.c` — Simulação de batalha com laços, `switch` e lógica de dano/vida.
- `d3_numero_secreto.c` — Jogo de adivinhação com controle de tentativas e interrupção precoce (`break`).

### 🛡️ Bloco 2 — Fases 3 e 4
- `d1_padrao_do_escudo.c` — Desenho matricial em terminal com laços aninhados e condição composta.
- `d2_base_secreta.c` — Sistema de acesso com `while`, senha mascarada e contador de tentativas.
- `d3_caixa_eletronico_da_vila.c` — Menu bancário modularizado com procedimentos e funções reutilizáveis.

### 👑 Bloco 3 — Fases 5 e 6
- `d1_caravana_de_mercadores.c` — Vetor com 4 estatísticas simultâneas (soma, média com cast float, maior e menor peso) em passagem única.
- `d2_jogo_da_velha_matematico.c` — Matriz 3x3 com funções de verificação das diagonais principal e secundária.
- `d3_cofre_de_quatro_pinos.c` — Busca posicional comparando dois vetores índice a índice com flag de vitória.

---

## 🧪 Pasta Extras (`Extras/`)

- `q10_caca_aos_erros_ORIGINAL_COM_ERROS.c` — Código com defeitos intencionais da Questão 10 da Fase 2, para o estudante praticar depuração (*não compila de propósito*).
- `q09_experimento_sem_break.c` — Variação da Questão 9 da Fase 2 sem o comando `break` no primeiro `case`, para demonstrar o efeito de cascata (*fall-through*).

---

## ⚙️ Como Compilar e Executar

Todos os arquivos (com exceção do arquivo com erros intencionais em `Extras/`) compilam com `gcc -Wall -Wextra` sem nenhum aviso:

```bash
# Compilar um exercício
gcc -Wall -Wextra Fase1-Primeiros-Passos/q01_ficha_do_heroi.c -o exercicio

# Executar no Linux / macOS
./exercicio

# Executar no Windows (cmd ou powershell)
exercicio.exe
```

---

<div align="center">

⬅️ [Voltar ao README principal](../README.md)

</div>
