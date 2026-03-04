# 🛡️ Marvel Rivals: Comparador de Vingadores

> "Posso fazer isso o dia todo!"

Este projeto é uma aplicação em **JavaScript (Node.js)** que simula um sistema de batalha e comparação de atributos entre personagens do universo Marvel (Vingadores) e seu rival, Thanos.

O sistema utiliza conceitos de **Lógica de Programação**, **Manipulação de Arrays** e **Objetos** para determinar qual herói possui vantagem estratégica em um combate.

##  Funcionalidades

* **Catálogo de Heróis:** Base de dados com atributos detalhados (Força, Agilidade, Resistência, Inteligência).
* **Comparação Dinâmica:** O sistema calcula a diferença de atributos entre dois personagens selecionados.
* **Veredito Automático:** Algoritmo que determina o vencedor com base no somatório das vantagens.
* **Interface Interativa:** Menu via terminal que permite busca inteligente de personagens (ex: digitar "homem" encontra "Homem de Ferro" ou "Homem Aranha").
* **Loop de Batalha:** Permite realizar múltiplas comparações sem reiniciar o programa.
* **🦇 Easter Egg:** Tente digitar `batman` e veja o que acontece!

##  Tecnologias Utilizadas

* **JavaScript (ES6+)**
* **Node.js** (Ambiente de execução)
* **Readline** (Módulo nativo para interação via terminal)

##  Estrutura do Projeto

* `index.js`: Arquivo principal. Gerencia o menu, as perguntas ao usuário e o fluxo do programa.
* `Vingador.js`: Contém os objetos dos personagens e seus atributos estatísticos.
* `Comparador.js`: Contém a lógica matemática que compara os atributos e imprime o resultado do combate.

## 🔧 Como Rodar o Projeto

1. Certifique-se de ter o **Node.js** instalado em sua máquina.
2. Clone este repositório ou baixe os arquivos.
3. Abra o terminal na pasta do projeto.
4. Execute o comando:
```bash
node index.js
```

## Autor

Feito por Gabriel Borges de Toledo, 3° Semestre de ADS Fatec SJC
