---
authorid: 1
category: Dev
title: Typescript - Introdução
date: "2024-01-22T11:00:00.284Z"
description: "Typescript, vamos começar pela base."
---

## O que é Typescript

[Typescript](https://www.typescriptlang.org/) é um superconjunto de Javascript, isso significa que contém tudo que o Javascript possui e ainda inclui recursos que não estão presentes de maneira nativa na linguagem, por exemplo: static typing (tipagem estática), classes, interfaces, generics, namespaces, modules, entre outros.

No final você pode escolher a versão Javascript a qual seu código será transpilado de acordo com suas necessidades de quais navegadores e versões sua aplicação deve ser compatível.

## Quais são as vantagens do Typescript?

> A principal vantagem do TypeScript em relação ao JavaScript “tradicional” é adicionar recursos importantes e úteis para a construção de projetos em larga escala, como tipagem estática, forte e automática, orientação a objetos e a possibilidade de descobrir e corrigir erros em tempo real durante o desenvolvimento. - Fonte: [Tecnoblog](https://tecnoblog.net/responde/o-que-e-typescript-guia-para-iniciantes/).

### Exemplo

Se um boolean é passado como parâmetro para uma função que deveria receber string, o Typescript é capaz de indicar antes da execução. Entendeu?

## Iniciando o desenvolvimento local com Typescript

### Playground

Para dar os primeiros passos em Typescript sem ter que instalar nada podemos utilizar um playground disponibilizado no site oficial: [Typescript Playground](https://www.typescriptlang.org/play).

### Desenvolvimento local

Caso você queira começar o desenvolvimento localmente e tenha pouco conhecimento do ecossistema Javascript, a primeira coisa é instalar o Node. Para isso algumas opções podem ser:

- Instalar o [Node Version Manager](https://github.com/nvm-sh/nvm) (nvm) que permitirá ter múltiplas versões do Node na sua máquina e alternar entre elas pelo seu terminal preferido;
- Instalar uma [versão do Node](https://nodejs.org/en) direto na sua máquina e "ficar" com ela, inclusive se o objetivo for somente estudo não tem nada de ruim nessa opção;
- Instalar o Docker com uma imagem Node de sua preferência e rodar seus códigos dentro do container;

Para saber se você tem uma versão do Node instalada basta abrir seu terminal e digitar: `node -v`. Em caso positivo o comando será reconhecido e será retornado algo como `v18.17.0`, por exemplo.

Se você tem o Node quer dizer que automaticamente também tem o NPM (Node Package Manager) que será útil para iniciarmos um projeto e instalarmos suas dependências. A versão pode ser vista utilizando o comando `npm -v`.

Se você tem pouca familiaridade com Terminal esse começo pode ser difícil. Um artigo que aconselho é: [Terminal no MacOS e Linux](https://blog.cod3r.com.br/terminal-no-macos-e-linux/)ou [Terminal no Windows](https://blog.cod3r.com.br/terminal-no-windows/), ambos da cod3r.

## Criação e configuração de projeto

A criação de um projeto e configuração do mesmo na minha opinião exige um vídeo e como não farei isso, aconselho o da Glaucia Lemos: [Preparando o Ambiente de Desenvolvimento para o TypeScript](https://www.youtube.com/watch?v=J-sMh3DF10U). Ela fez inclusive outro vídeo explicando o arquivo de configuração do Typescript: [Entendendo o arquivo tsconfig.json](https://www.youtube.com/watch?v=iYXzT08sX5Y).


## Como adicionar Typescript ao seu projeto já existente?

O Node não executa os arquivos .ts, pois esses arquivos contém instruções além do que é compreensível para ele, portanto, é necessário utilizar uma dependência e configurá-la.

Instalando dependência Typescript globalmente na máquina:

```
npm i typescript -g
```

Criando arquivo tsconfig.json:

```
npx tsc --init
```

Instalação do pacote @types/node que possui todas as definições de tipos do NodeJS.

```
npm i @types/node --save-dev
```

É aconselhável a instalação de algum plugin em sua IDE (VS Code, Atom, Sublime) que tenha suporte a Typescript também.
