# 🏗️ Projeto Integrado em C

<div align="center">

### Aplicação prática contínua desenvolvida ao longo das fases do curso

![Linguagem](https://img.shields.io/badge/linguagem-C-00599C?style=for-the-badge&logo=c&logoColor=white)
![Compilador](https://img.shields.io/badge/compilador-GCC-yellow?style=for-the-badge)
![Projeto](https://img.shields.io/badge/Try%2C%20Catch%20%26%20Learn-REA-2ea44f?style=for-the-badge)

</div>

---

## 🧭 Sobre o Projeto Integrado

O **Projeto Integrado** é um software em linguagem C que acompanha a evolução pedagógica dos estudantes fase a fase. Diferente de pequenos exercícios pontuais, ele simula a construção de um **sistema real de cadastro e gestão de pessoas e endereços**.

A cada nova fase da disciplina, o código foi refatorado e expandido:
1. **Fases 1 e 2:** Cadastro sequencial de dados primitivos, leitura com `scanf`, máscaras de exibição e primeiras validações com `if/else`.
2. **Fase 3:** Introdução de repetição contínua (`do-while`) para permitir múltiplos cadastros e validação de idade com laço `while`.
3. **Fase 4:** Refatoração modular completa, separando responsabilidades em procedimentos (`cadastrarPessoa`) e funções com retorno (`lerIdade`, `perguntarSeRepete`).

---

## 💻 Arquivo Fonte

- [`main.c`](./main.c): Código-fonte completo do sistema integrado.

---

## ⚙️ Como Compilar e Executar

O projeto utiliza a biblioteca padrão de C (`stdio.h`) e compila em qualquer ambiente padrão:

```bash
# Compilar com GCC
gcc -Wall -Wextra Projeto-Integrado/main.c -o sistema_cadastro

# Executar no Linux / macOS
./sistema_cadastro

# Executar no Windows
sistema_cadastro.exe
```

---

<div align="center">

⬅️ [Voltar ao README principal](../README.md)

</div>
