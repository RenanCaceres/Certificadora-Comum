# 💻 Exercícios Resolvidos dos Slides

Este diretório contém os códigos-fonte em linguagem C de todos os exercícios práticos apresentados nos **slides das videoaulas** do projeto **Try, Catch & Learn**.

---

## 🗂️ Estrutura de Arquivos

### 📦 Fase 5 — Vetores e Matrizes (`Fase5-Vetores-e-Matrizes/`)
Apresentação elaborada por **Lauren Marçulo**.

| Arquivo | Missão do Slide | Tópico |
|---------|-----------------|--------|
| [`m01_tesouro_cinco_baus.c`](Fase5-Vetores-e-Matrizes/m01_tesouro_cinco_baus.c) | **Missão 1: O Tesouro dos Cinco Baús** | Vetor unidimensional, índice e acumulador com laço `for` |
| [`m02_recorde_campeonato.c`](Fase5-Vetores-e-Matrizes/m02_recorde_campeonato.c) | **Missão 2: O Recorde do Campeonato** | Algoritmo clássico de busca do maior valor em vetor |
| [`m03_tabuleiro_magico.c`](Fase5-Vetores-e-Matrizes/m03_tabuleiro_magico.c) | **Missão 3: O Tabuleiro Mágico 2x2** | Matriz 2D, exibição em grade e soma com laços aninhados |
| [`m04_mapa_cinema.c`](Fase5-Vetores-e-Matrizes/m04_mapa_cinema.c) | **Missão 4: O Mapa da Sala de Cinema** | Matriz 2x3, mapa de ocupação e contagem condicional |

---

### 🧩 Fase 6 — A Ficha Completa: Struct (`Fase6-Struct/`)
Apresentação elaborada por **Lorena Eduarda**.

| Arquivo | Missão do Slide | Tópico |
|---------|-----------------|--------|
| [`m01_ficha_do_heroi.c`](Fase6-Struct/m01_ficha_do_heroi.c) | **Missão 1: A Ficha do Herói** | Definição de `struct`, atribuição de campos e `strcpy` |
| [`m02_caixa_taverna.c`](Fase6-Struct/m02_caixa_taverna.c) | **Missão 2: O Caixa da Taverna** | Inicialização direta de struct e cálculos com operador ponto (`.`) |
| [`m03_mapa_tesouro.c`](Fase6-Struct/m03_mapa_tesouro.c) | **Missão 3: O Mapa do Tesouro** | Modelagem de coordenadas cartesianas `(x, y)` com struct |
| [`m04_grimorio_livro.c`](Fase6-Struct/m04_grimorio_livro.c) | **Missão 4: O Grimório do Livro** | Modelagem de catálogo de biblioteca com múltiplos tipos |

---

## ⚙️ Como compilar e executar

Todos os códigos foram testados e compilam sem avisos (`0 errors, 0 warnings`):

```bash
# Compilar qualquer exercício
gcc -Wall -Wextra Fase5-Vetores-e-Matrizes/m01_tesouro_cinco_baus.c -o programa

# Executar no Linux / macOS
./programa

# Executar no Windows
programa.exe
```
