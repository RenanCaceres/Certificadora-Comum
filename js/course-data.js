/**
 * Try, Catch & Learn - Dados do Curso e Playlist de Videoaulas
 * Plataforma REA - UTFPR Cornélio Procópio
 */

const COURSE_DATA = {
  courseTitle: "Fundamentos da Programação em C",
  institution: "UTFPR — Campus Cornélio Procópio",
  supervision: "Prof. Dr. André Luís dos Santos Domingues",
  team: [
    {
      name: "Lauren Marçulo",
      role: "Desenvolvimento & Conteúdo Didático",
      initials: "LM",
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Lorena Eduarda Barros Martinelli",
      role: "Design Pedagógico & Apresentação",
      initials: "LE",
      color: "from-indigo-500 to-purple-400"
    },
    {
      name: "Manuella Vieira Reginato",
      role: "Curadoria de Exercícios & Documentação",
      initials: "MV",
      color: "from-sky-500 to-teal-400"
    },
    {
      name: "Renan Cáceres Anselmo",
      role: "Arquitetura, Desenvolvimento & Código em C",
      initials: "RC",
      color: "from-cyan-500 to-blue-600"
    }
  ],
  modules: [
    {
      id: "mod-0",
      title: "Módulo 0: Ambientação & Ferramentas",
      description: "Conhecendo o ambiente de programação e ferramentas essenciais.",
      badge: "Iniciante",
      lessons: [
        {
          id: "m0-1",
          number: "0.1",
          title: "Videoaula IDE: Online GDB em C",
          duration: "8 min",
          videoType: "youtube",
          youtubeId: "GAV8ACiT6TU",
          videoSrc: "https://www.youtube.com/embed/GAV8ACiT6TU",
          description: "Aprenda a utilizar o compilador online Online GDB para escrever, compilar e depurar seus primeiros códigos em C diretamente no navegador, sem precisar instalar nada na sua máquina.",
          topics: [
            "Visão geral do ambiente Online GDB",
            "Como selecionar a linguagem C",
            "Janela de código, botões Run e Debug",
            "Terminal de entrada e saída (I/O)",
            "Salvando e compartilhando projetos"
          ],
          theoryPdf: "Conteúdo-Teórico/Fase 1 - Primeiros Passos em C.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `#include <stdio.h>

int main() {
    // Primeiro programa no Online GDB
    printf("Ola, mundo! Bem-vindo ao C no Online GDB.\\n");
    return 0;
}`,
          resources: [
            { label: "Acessar Online GDB", url: "https://www.onlinegdb.com/" },
            { label: "Documentação GNU GCC", url: "https://gcc.gnu.org/" }
          ]
        },
        {
          id: "m0-2",
          number: "0.2",
          title: "Ferramentas: VS Code e Controle de Versão com Git",
          duration: "14 min",
          videoType: "youtube",
          youtubeId: "L7U_0ep5Uw8",
          videoSrc: "https://www.youtube.com/embed/L7U_0ep5Uw8",
          description: "Configuração do ambiente profissional no seu computador com VS Code, compilador GCC e introdução prática ao Git e GitHub para versionamento de projetos de software.",
          topics: [
            "Instalação e extensões recomendadas do VS Code",
            "Configurando o compilador GCC localmente",
            "Conceito de repositório, commits e branches",
            "Sincronização com o GitHub",
            "Boas práticas para organizar pastas de projetos em C"
          ],
          theoryPdf: "Conteúdo-Teórico/Fase 1 - Primeiros Passos em C.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `// Comandos basicos de Git no terminal:
// git init
// git add .
// git commit -m "Meu primeiro commit"
// git push origin main`,
          resources: [
            { label: "Download VS Code", url: "https://code.visualstudio.com/download" },
            { label: "Download Git", url: "https://git-scm.com/downloads" },
            { label: "GitHub Oficial", url: "https://github.com/" }
          ]
        }
      ]
    },
    {
      id: "mod-1",
      title: "Fase 1: Primeiros Passos em C",
      description: "Constantes, variáveis, expressões e comandos de entrada e saída.",
      badge: "Fase 1",
      lessons: [
        {
          id: "f1-1",
          number: "1.1",
          title: "Videoaula 1: Algoritmos, Constantes e Variáveis",
          duration: "16 min",
          videoType: "local_or_youtube",
          localVideoSrc: "Conteúdo-Teórico/aulas/Aula1.mp4",
          youtubeId: "XvtzrD_HSb8",
          videoSrc: "https://www.youtube.com/embed/XvtzrD_HSb8",
          description: "Neste vídeo introdutório, exploramos como o computador armazena informações na memória através de variáveis e constantes, os tipos primitivos (int, float, char) e regras de nomenclatura.",
          topics: [
            "O que é memória e como variáveis funcionam",
            "Tipos de dados fundamentais: int, float, char",
            "Diferença prática entre variáveis e constantes",
            "Declaração, inicialização e atribuição de valores",
            "Boas práticas e convenções de nomenclatura"
          ],
          theoryPdf: "Conteúdo-Teórico/Fase 1 - Primeiros Passos em C.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `#include <stdio.h>

int main() {
    int idade = 20;
    float altura = 1.75;
    char inicial = 'R';
    const float PI = 3.14159;

    printf("Inicial: %c\\n", inicial);
    printf("Idade: %d anos\\n", idade);
    printf("Altura: %.2f m\\n", altura);
    printf("Constante PI: %.5f\\n", PI);

    return 0;
}`,
          resources: [
            { label: "Apostila Fase 1 (PDF)", url: "Conteúdo-Teórico/Fase 1 - Primeiros Passos em C.pdf" },
            { label: "Repositório Gabarito Fase 1", url: "Gabarito-Exercícios/Fase1-Primeiros-Passos/" }
          ]
        },
        {
          id: "f1-2",
          number: "1.2",
          title: "Videoaula 2: Expressões Aritméticas, Relacionais e Lógicas",
          duration: "13 min",
          videoType: "youtube",
          youtubeId: "Lgsl7jWHqH4",
          videoSrc: "https://www.youtube.com/embed/Lgsl7jWHqH4",
          description: "Aprenda como realizar cálculos matemáticos (+, -, *, /, %) e construir comparações lógicas (>, <, ==, !=, &&, ||) que dão inteligência ao código.",
          topics: [
            "Operadores aritméticos e divisão inteira vs decimal",
            "Operador módulo (resto da divisão %)",
            "Operadores relacionais de comparação",
            "Operadores lógicos E (&&), OU (||) e NÃO (!)",
            "Precedência de operadores e parênteses"
          ],
          theoryPdf: "Conteúdo-Teórico/Fase 1 - Primeiros Passos em C.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `#include <stdio.h>

int main() {
    int a = 10, b = 3;
    printf("Soma: %d\\n", a + b);
    printf("Divisao inteira: %d\\n", a / b);
    printf("Resto da divisao (mod): %d\\n", a % b);
    printf("Divisao real: %.2f\\n", (float)a / b);

    int condicao = (a > 5) && (b < 10);
    printf("Expressao logica (1=V, 0=F): %d\\n", condicao);

    return 0;
}`,
          resources: [
            { label: "Apostila Fase 1", url: "Conteúdo-Teórico/Fase 1 - Primeiros Passos em C.pdf" }
          ]
        },
        {
          id: "f1-3",
          number: "1.3",
          title: "Videoaula 3: Entrada e Saída (printf / scanf) e Estrutura Sequencial",
          duration: "15 min",
          videoType: "youtube",
          youtubeId: "vDR1sEfcIe0",
          videoSrc: "https://www.youtube.com/embed/vDR1sEfcIe0",
          description: "Interação com o usuário através de comandos de entrada e saída. Aprenda a usar printf formatado e o operador & no scanf para capturar dados.",
          topics: [
            "Máscaras de formatação (%d, %f, %c, %s)",
            "Formatando casas decimais com %.2f",
            "Lendo dados com scanf e a importância do &",
            "Cuidados com buffers e quebras de linha \\n",
            "Estrutura de execução sequencial linear"
          ],
          theoryPdf: "Conteúdo-Teórico/Fase 1 - Primeiros Passos em C.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `#include <stdio.h>

int main() {
    int numero;
    float preco;

    printf("Digite um numero inteiro: ");
    scanf("%d", &numero);

    printf("Digite o valor do produto: ");
    scanf("%f", &preco);

    printf("Voce digitou %d e o preco e R$ %.2f\\n", numero, preco);
    return 0;
}`,
          resources: [
            { label: "Gabarito Fase 1 - Missões", url: "Gabarito-Exercícios/Fase1-Primeiros-Passos/" }
          ]
        }
      ]
    },
    {
      id: "mod-2",
      title: "Fase 2: O Programa Aprende a Decidir",
      description: "Tomada de decisões no código usando if, else, else if e switch.",
      badge: "Fase 2",
      lessons: [
        {
          id: "f2-1",
          number: "2.1",
          title: "Videoaula 4: Estrutura de Decisão (if / else / switch)",
          duration: "18 min",
          videoType: "youtube",
          youtubeId: "BeI6jhXlMjA",
          videoSrc: "https://www.youtube.com/embed/BeI6jhXlMjA",
          description: "Ensine seu programa a tomar decisões inteligentes! Compreenda condições simples, compostas, aninhadas e a estrutura de seleção múltipla switch-case.",
          topics: [
            "Condição simples com if",
            "Alternativas com else e else if",
            "Múltiplas escolhas com switch-case e break",
            "A cláusula default no switch",
            "Dicas de depuração e caça aos erros comuns"
          ],
          theoryPdf: "Conteúdo-Teórico/Fase 2 - O Programa Aprende a Decidir.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `#include <stdio.h>

int main() {
    int opcao;
    printf("Escolha uma opcao (1-Iniciar, 2-Config, 3-Sair): ");
    scanf("%d", &opcao);

    switch(opcao) {
        case 1:
            printf("Iniciando jornada...\\n");
            break;
        case 2:
            printf("Configuracoes do sistema.\\n");
            break;
        case 3:
            printf("Saindo do programa.\\n");
            break;
        default:
            printf("Opcao invalida!\\n");
    }
    return 0;
}`,
          resources: [
            { label: "Apostila Fase 2 (PDF)", url: "Conteúdo-Teórico/Fase 2 - O Programa Aprende a Decidir.pdf" },
            { label: "Gabarito Fase 2", url: "Gabarito-Exercícios/Fase2-Decisoes/" }
          ]
        }
      ]
    },
    {
      id: "mod-3",
      title: "Fase 3: Repita Comigo (Laços de Repetição)",
      description: "Automatizando repetições com while, do-while e for.",
      badge: "Fase 3",
      lessons: [
        {
          id: "f3-1",
          number: "3.1",
          title: "Videoaula 5: Estruturas de Repetição (while, do-while, for)",
          duration: "21 min",
          videoType: "youtube",
          youtubeId: "qHz7JVYPLXA",
          videoSrc: "https://www.youtube.com/embed/qHz7JVYPLXA",
          description: "Automatize tarefas repetitivas com laços de repetição controlados por contador e por condição, além dos comandos de desvio break e continue.",
          topics: [
            "O laço while para condições dinâmicas",
            "O laço do-while para menus que executam pelo menos uma vez",
            "O laço for com inicialização, teste e incremento",
            "Variáveis contadoras e acumuladoras",
            "Interrupção precoce com break e salto com continue"
          ],
          theoryPdf: "Conteúdo-Teórico/Fase 3 - Repita Comigo Laços de Repetição.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `#include <stdio.h>

int main() {
    int i;
    printf("Contagem progressiva com for:\\n");
    for (i = 1; i <= 5; i++) {
        printf("%d... ", i);
    }
    printf("Fim!\\n");
    return 0;
}`,
          resources: [
            { label: "Apostila Fase 3 (PDF)", url: "Conteúdo-Teórico/Fase 3 - Repita Comigo Laços de Repetição.pdf" },
            { label: "Gabarito Fase 3", url: "Gabarito-Exercícios/Fase3-Lacos-de-Repeticao/" }
          ]
        }
      ]
    },
    {
      id: "mod-4",
      title: "Fase 4: Dividir para Programar (Modularização)",
      description: "Dividindo programas em funções e procedimentos reutilizáveis.",
      badge: "Fase 4",
      lessons: [
        {
          id: "f4-1",
          number: "4.1",
          title: "Videoaula 6: Funções e Procedimentos",
          duration: "19 min",
          videoType: "youtube",
          youtubeId: "uRyVZyFKhmM",
          videoSrc: "https://www.youtube.com/embed/uRyVZyFKhmM",
          description: "Mergulhe no conceito de subprogramas: entenda a diferença entre procedimentos (void) e funções que retornam valores calculados.",
          topics: [
            "Por que dividir o código em blocos menores",
            "Definição de procedimentos void sem retorno",
            "Criação de funções com tipos de retorno (int, float)",
            "Parâmetros formais e argumentos reais",
            "Escopo de variáveis locais vs globais"
          ],
          theoryPdf: "Conteúdo-Teórico/Aula Fase 4 - Dividir Para Programar.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `#include <stdio.h>

float calcularMedia(float n1, float n2) {
    return (n1 + n2) / 2.0;
}

void saudar(char nome[]) {
    printf("Ola, %s! Bem-vindo(a) a aula.\\n", nome);
}

int main() {
    saudar("Estudante");
    float media = calcularMedia(8.5, 7.5);
    printf("Sua media foi: %.2f\\n", media);
    return 0;
}`,
          resources: [
            { label: "Apostila Fase 4 (PDF)", url: "Conteúdo-Teórico/Aula Fase 4 - Dividir Para Programar.pdf" },
            { label: "Gabarito Fase 4", url: "Gabarito-Exercícios/Fase4-Modularizacao/" }
          ]
        },
        {
          id: "f4-2",
          number: "4.2",
          title: "Videoaula 7: Técnicas Avançadas de Modularização",
          duration: "17 min",
          videoType: "youtube",
          youtubeId: "0PQqvejPM1o",
          videoSrc: "https://www.youtube.com/embed/0PQqvejPM1o",
          description: "Práticas recomendadas para modularizar projetos reais: protótipos de funções, passagem de parâmetros e menus estruturados em C.",
          topics: [
            "Declaração de protótipos antes do main",
            "Separação de responsabilidades",
            "Construção de menus com loops e subrotinas",
            "Reutilização de código limpa e sem redundâncias"
          ],
          theoryPdf: "Conteúdo-Teórico/Aula Fase 4 - Dividir Para Programar.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `#include <stdio.h>

void menu();
int somar(int a, int b);

int main() {
    menu();
    printf("Resultado: %d\\n", somar(10, 25));
    return 0;
}

void menu() {
    printf("=== SISTEMA MODULAR ===\\n");
}

int somar(int a, int b) {
    return a + b;
}`,
          resources: [
            { label: "Apostila Fase 4 (PDF)", url: "Conteúdo-Teórico/Aula Fase 4 - Dividir Para Programar.pdf" }
          ]
        }
      ]
    },
    {
      id: "mod-5",
      title: "Fase 5: Muitos Dados, Uma Só Caixa (Vetores e Matrizes)",
      description: "Coleções homogêneas de dados em listas 1D e tabelas 2D.",
      badge: "Fase 5",
      lessons: [
        {
          id: "f5-1",
          number: "5.1",
          title: "Vetores Unidimensionais (1D) e Matrizes Bidimensionais (2D)",
          duration: "24 min",
          videoType: "youtube",
          youtubeId: "-EDLjH2g4j4", // Variáveis Compostas / Vetores
          videoSrc: "https://www.youtube.com/embed/-EDLjH2g4j4",
          description: "Aprenda a guardar múltiplos valores do mesmo tipo sob um único nome. Entenda índices, posições na memória, laços for aninhados e como enviar vetores e matrizes para funções.",
          topics: [
            "Conceito de estante de gavetas e índice base 0",
            "Acesso e leitura com vetores e laço for",
            "Busca do maior e menor elemento",
            "Busca sequencial e interrupção com break",
            "Matrizes 2D: tabelas com linhas e colunas",
            "Percorrendo matrizes com dois laços for aninhados"
          ],
          theoryPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `#include <stdio.h>

int main() {
    int numeros[5];
    int i;
    for (i = 0; i < 5; i++) {
        printf("Digite o numero %d: ", i + 1);
        scanf("%d", &numeros[i]);
    }
    printf("Voce digitou: ");
    for (i = 0; i < 5; i++) {
        printf("%d ", numeros[i]);
    }
    printf("\\n");
    return 0;
}`,
          resources: [
            { label: "Caderno de Missões III (PDF)", url: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf" },
            { label: "Gabarito Comentado III (PDF)", url: "Conteúdo-Teórico/Gabarito_Comentado_III.pdf" },
            { label: "Soluções em C (Fase 5)", url: "Gabarito-Exercícios/Fase5-Vetores-e-Matrizes/" }
          ]
        }
      ]
    },
    {
      id: "mod-6",
      title: "Fase 6: A Ficha Completa (Boss Final: Struct)",
      description: "Agrupando dados heterogêneos em uma única estrutura.",
      badge: "Fase 6",
      lessons: [
        {
          id: "f6-1",
          number: "6.1",
          title: "Videoaula 8: Variáveis Compostas Heterogêneas (Struct)",
          duration: "25 min",
          videoType: "youtube",
          youtubeId: "-EDLjH2g4j4",
          videoSrc: "https://www.youtube.com/embed/-EDLjH2g4j4",
          description: "O chefão final da programação básica: aprenda a criar novos tipos de dados com struct, manipular campos com o operador ponto (.), usar vetores de structs e ponteiros com a seta (->).",
          topics: [
            "O que são variáveis compostas heterogêneas",
            "Definição da struct (o molde) e declaração da variável",
            "Acesso aos campos com o operador ponto (.)",
            "Strings em structs: strcpy vs scanf(\" %[^\\n]\")",
            "Vetores de structs (ex: turma[30])",
            "Passagem de struct por cópia e por referência com ponteiros (->)"
          ],
          theoryPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `#include <stdio.h>
#include <string.h>

struct Livro {
    char titulo[80];
    int ano;
    float preco;
};

int main() {
    struct Livro livro1;
    strcpy(livro1.titulo, "O Pequeno Programador");
    livro1.ano = 2021;
    livro1.preco = 39.90;

    printf("Titulo: %s\\n", livro1.titulo);
    printf("Ano: %d\\n", livro1.ano);
    printf("Preco: R$ %.2f\\n", livro1.preco);
    return 0;
}`,
          resources: [
            { label: "Caderno de Missões III (PDF)", url: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf" },
            { label: "Gabarito Comentado III (PDF)", url: "Conteúdo-Teórico/Gabarito_Comentado_III.pdf" },
            { label: "Soluções em C (Fase 6)", url: "Gabarito-Exercícios/Fase6-Struct/" }
          ]
        }
      ]
    },
    {
      id: "mod-7",
      title: "Desafios Finais & Projeto Integrado",
      description: "Juntando tudo em problemas complexos do mundo real.",
      badge: "Desafios",
      lessons: [
        {
          id: "des-1",
          number: "D.1",
          title: "Desafio 1: A Caravana de Mercadores",
          duration: "18 min",
          videoType: "youtube",
          youtubeId: "qHz7JVYPLXA",
          videoSrc: "https://www.youtube.com/embed/qHz7JVYPLXA",
          description: "Desafio que integra vetores e múltiplas estatísticas simultâneas (soma, média com cast float, maior e menor peso) processadas em uma única passagem pelo laço.",
          topics: [
            "Cálculo de 4 estatísticas num único laço for",
            "A importância do cast (float) para divisão com casas decimais",
            "Controle de limite e emissão de alertas condicionais"
          ],
          theoryPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `#include <stdio.h>

int main() {
    int caravana[10];
    int i, soma = 0, maior, menor;
    float media;

    for (i = 0; i < 10; i++) {
        printf("Peso do item %d (kg): ", i + 1);
        scanf("%d", &caravana[i]);
    }

    maior = caravana[0];
    menor = caravana[0];
    for (i = 0; i < 10; i++) {
        soma = soma + caravana[i];
        if (caravana[i] > maior) maior = caravana[i];
        if (caravana[i] < menor) menor = caravana[i];
    }
    media = (float) soma / 10;

    printf("--- Relatorio da caravana ---\\n");
    printf("Peso total: %d kg\\n", soma);
    printf("Peso medio: %.2f kg\\n", media);
    printf("Item mais pesado: %d kg\\n", maior);
    printf("Item mais leve: %d kg\\n", menor);

    if (soma > 500) {
        printf("ALERTA: caravana acima do limite de 500 kg!\\n");
    } else {
        printf("Peso dentro do limite seguro.\\n");
    }
    return 0;
}`,
          resources: [
            { label: "Código C - Desafio D1", url: "Gabarito-Exercícios/Desafios/d1_caravana_de_mercadores.c" },
            { label: "Gabarito Comentado III", url: "Conteúdo-Teórico/Gabarito_Comentado_III.pdf" }
          ]
        },
        {
          id: "des-2",
          number: "D.2",
          title: "Desafio 2: O Jogo da Velha Matemático & Diagonais",
          duration: "20 min",
          videoType: "youtube",
          youtubeId: "uRyVZyFKhmM",
          videoSrc: "https://www.youtube.com/embed/uRyVZyFKhmM",
          description: "Desafio de matrizes 3x3 e funções especializadas para calcular diagonais principais (m[i][i]) e secundárias (m[i][2-i]).",
          topics: [
            "Procedimento de preenchimento e exibição formatada",
            "Fórmula da diagonal principal (i == j)",
            "Fórmula da diagonal secundária (j == 2 - i)",
            "Passagem de matrizes multidimensionais como parâmetros"
          ],
          theoryPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `#include <stdio.h>

void preencherMatriz(int m[3][3]) {
    int i, j;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            printf("Valor da casa [%d][%d]: ", i, j);
            scanf("%d", &m[i][j]);
        }
    }
}

int somarDiagonalPrincipal(int m[3][3]) {
    int i, soma = 0;
    for (i = 0; i < 3; i++) soma += m[i][i];
    return soma;
}

int somarDiagonalSecundaria(int m[3][3]) {
    int i, soma = 0;
    for (i = 0; i < 3; i++) soma += m[i][2 - i];
    return soma;
}

int main() {
    int jogo[3][3];
    preencherMatriz(jogo);
    printf("Soma diagonal principal: %d\\n", somarDiagonalPrincipal(jogo));
    printf("Soma diagonal secundaria: %d\\n", somarDiagonalSecundaria(jogo));
    return 0;
}`,
          resources: [
            { label: "Código C - Desafio D2", url: "Gabarito-Exercícios/Desafios/d2_jogo_da_velha_matematico.c" }
          ]
        },
        {
          id: "des-3",
          number: "D.3",
          title: "Desafio 3: O Cofre de Quatro Pinos (Busca Posicional)",
          duration: "22 min",
          videoType: "youtube",
          youtubeId: "0PQqvejPM1o",
          videoSrc: "https://www.youtube.com/embed/0PQqvejPM1o",
          description: "Jogo de adivinhação comparando dois vetores posição a posição, com controle de rodadas, flag acertouTudo e break antecipado.",
          topics: [
            "Comparação indexada (tentativa[i] == senha[i])",
            "Diferença entre busca posicional e busca livre",
            "Reinicialização da variável de acertos em cada rodada",
            "Tratamento de vitória e esgotamento de tentativas"
          ],
          theoryPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          missionsPdf: "Conteúdo-Teórico/Caderno_de_Missoes_III.pdf",
          solutionCode: `#include <stdio.h>

int main() {
    int senha[4] = {3, 7, 1, 9};
    int tentativa[4];
    int i, acertos, acertouTudo = 0, rodada;

    printf("=== COFRE DE 4 PINOS ===\\n");
    for (rodada = 1; rodada <= 5; rodada++) {
        printf("\\nTentativa %d de 5\\n", rodada);
        acertos = 0;
        for (i = 0; i < 4; i++) {
            printf("Pino %d (0-9): ", i + 1);
            scanf("%d", &tentativa[i]);
        }
        for (i = 0; i < 4; i++) {
            if (tentativa[i] == senha[i]) acertos++;
        }
        printf("Pinos corretos na posicao certa: %d de 4\\n", acertos);
        if (acertos == 4) {
            printf("COFRE ABERTO!\\n");
            acertouTudo = 1;
            break;
        }
    }
    if (acertouTudo == 0) {
        printf("\\nTentativas esgotadas! O cofre permanece fechado.\\n");
    }
    return 0;
}`,
          resources: [
            { label: "Código C - Desafio D3", url: "Gabarito-Exercícios/Desafios/d3_cofre_de_quatro_pinos.c" }
          ]
        }
      ]
    }
  ]
};
