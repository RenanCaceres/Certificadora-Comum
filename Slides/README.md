# 📽️ Slides das Videoaulas

<div align="center">

### Apresentações visuais utilizadas nas gravações e transmissões do projeto Try, Catch & Learn

![Formato](https://img.shields.io/badge/formato-PDF%2016%3A9-EC1C24?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)
![Linguagem](https://img.shields.io/badge/linguagem-C-00599C?style=for-the-badge&logo=c&logoColor=white)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-yellow?style=for-the-badge)

</div>

---

## 🧭 Sobre esta pasta

Aqui ficam os **slides oficiais em alta resolução (formato widescreen 16:9)** utilizados nas gravações das videoaulas do curso. Cada apresentação visual foi desenhada para tornar o aprendizado lúdico e intuitivo, combinando teoria essencial com missões práticas interativas contextualizadas no universo do RPG.

Além das apresentações em PDF, as resoluções em código C compilável de todos os exercícios passados nos slides estão disponíveis na pasta [`Exercicios-Resolvidos/`](./Exercicios-Resolvidos/).

---

## 📑 Apresentações Disponíveis

| Fase | Título dos Slides | Apresentador(a) | Arquivo PDF | Exercícios em C |
|:----:|-------------------|-----------------|-------------|:---------------:|
| **1** | **Primeiros Passos em C** | Lauren Marçulo | [📄 `Fase 1 -Primeiros Passos em C.pdf`](<./Fase 1 -Primeiros Passos em C.pdf>) | [💻 3 Missões Resolvidas](./Exercicios-Resolvidos/Fase1-Primeiros-Passos/) |
| **2** | **O Programa Aprende a Decidir** | Lorena Eduarda | [📄 `Fase 2 - O Programa Aprende a Decidir.pdf`](<./Fase 2 - O Programa Aprende a Decidir.pdf>) | [💻 3 Missões Resolvidas](./Exercicios-Resolvidos/Fase2-Decisoes/) |
| **3** | **Repita Comigo: Laços de Repetição** | Lauren Marçulo | [📄 `Fase 3 -Repetição.pdf`](<./Fase 3 -Repetição.pdf>) | [💻 4 Missões Resolvidas](./Exercicios-Resolvidos/Fase3-Lacos-de-Repeticao/) |
| **4** | **Dividir para Programar (Modularização)** | Lorena Eduarda | [📄 `Fase 4 - Modularização.pdf`](<./Fase 4 - Modularização.pdf>) | [💻 3 Missões Resolvidas](./Exercicios-Resolvidos/Fase4-Modularizacao/) |
| **5** | **Muitos Dados, Uma Só Caixa: Vetores e Matrizes** | Lauren Marçulo | [📄 `Fase 5 - Muitos dados, uma só caixa vetores e matrizes.pdf`](<./Fase 5 - Muitos dados, uma só caixa vetores e matrizes.pdf>) | [💻 4 Missões Resolvidas](./Exercicios-Resolvidos/Fase5-Vetores-e-Matrizes/) |
| **6** | **A Ficha Completa: Struct** | Lorena Eduarda | [📄 `Fase 6 - Struct.pdf`](<./Fase 6 - Struct.pdf>) | [💻 4 Missões Resolvidas](./Exercicios-Resolvidos/Fase6-Struct/) |

---

## 🎯 Conteúdo e Missões Práticas dos Slides

### 🚀 Fase 1 — Primeiros Passos em C
- **Conceitos:** O que é programar, estrutura básica do C (`stdio.h`, `main`), tipos de dados (`int`, `float`, `char`), entrada e saída (`printf`, `scanf`) e operadores aritméticos (`+`, `-`, `*`, `/`, `%`).
- **Missões dos Slides:**
  1. *A Loja de Poções do Mago Merlin* (`float total = (vida * 12.50) + (mana * 15.00)`)
  2. *Dividindo o Tesouro Pirata* (divisão inteira `/` e operador resto `%`)
  3. *Calculadora de XP de Aventura* (leitura de `char` e cálculo ponderado de pontuação)

### 🛡️ Fase 2 — O Programa Aprende a Decidir
- **Conceitos:** Tomada de decisão, operadores relacionais, condicional simples e composta com `if` / `else`, decisões encadeadas com `else if` e seleção com `switch`, `case`, `break` e `default`.
- **Missões dos Slides:**
  1. *O Guardião do Portal do Dragão* (condicional `if (nivel >= 10)` com `else`)
  2. *Radar Climático da Expedição* (decisões encadeadas `if` / `else if` / `else`)
  3. *Menu do Mascote / Personagem RPG* (seleção de rotina diária com `switch`)

### 🔁 Fase 3 — Laços de Repetição
- **Conceitos:** Repetições automáticas, `while`, `do-while`, `for`, contadores, acumuladores de soma, interrupção com `break` e salto com `continue`.
- **Missões dos Slides:**
  1. *A Contagem Regressiva do Foguete* (laço `for` regressivo de 10 a 1)
  2. *O Baú de Moedas da Guilda* (acumulador `soma += moedas` com laço `for`)
  3. *O Portão Rúnico da Fortaleza* (laço `while` com validação de senha numérica)
  4. *O Treino do Guerreiro* (laço `do while` interativo garantindo ao menos uma execução)

### 🧩 Fase 4 — Modularização (Dividir para Programar)
- **Conceitos:** Decomposição modular, reutilização, procedimentos `void` sem retorno, passagem de parâmetros por valor e funções com retorno (`return`).
- **Missões dos Slides:**
  1. *Grito de Guerra da Guilda* (procedimento `void alertaBatalha(void)` reutilizável)
  2. *Feitiço de Cura do Mago* (procedimento `void usarCura(int magia)` com parâmetro)
  3. *Calculadora de Dano no Chefão* (função `int calcularDano(int arma, int bonus)` com retorno)

### 📦 Fase 5 — Vetores e Matrizes
- **Conceitos:** Estante de gavetas, índices base 0, percorrimento com `for`, busca de maior/menor elemento, tabelas bidimensionais e laços aninhados.
- **Missões dos Slides:**
  1. *O Tesouro dos Cinco Baús* (`baus[5]` e acumulador)
  2. *O Recorde do Campeonato* (busca de maior valor)
  3. *O Tabuleiro Mágico 2x2* (matriz 2D e soma de elementos)
  4. *O Mapa da Sala de Cinema* (matriz 2x3 e contagem de poltronas ocupadas)

### 👑 Fase 6 — A Ficha Completa (Struct)
- **Conceitos:** Variáveis compostas heterogêneas, declaração de molde (`struct`), operador ponto (`.`), manipulação de strings com `strcpy` e modelagem de entidades do mundo real.
- **Missões dos Slides:**
  1. *A Ficha do Herói* (`struct Heroi` com atributos de RPG)
  2. *O Caixa da Taverna* (`struct Item` e total de compra)
  3. *O Mapa do Tesouro* (`struct Ponto` com coordenadas cartesianas)
  4. *O Grimório do Livro* (`struct Livro` para acervo de biblioteca)

---

## 🔗 Navegação Rápida

- 📖 [Conteúdo Teórico & Apostilas completas](../Conteúdo-Teórico/README.md)
- 💻 [Gabarito de Exercícios do Caderno de Missões](../Gabarito-Exercícios/README.md)
- 🌐 [Voltar ao README principal](../README.md)
