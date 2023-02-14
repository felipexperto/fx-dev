---
authorid: 1
category: Dev
tags:
  - blog/category/dev
title: O que é React e conceitos básicos
date: "2023-02-14T00:00:00.284Z"
description: "O que é React? Como React funciona? O que são componentes em React?"
---

## O que é React?

React é uma biblioteca Javascript para criação de interfaces. É utilizado para criar aplicações web pois **permite aos desenvolvedores criar componentes de interface reutilizáveis** e **gerenciar o estado da aplicação de maneira eficiente e organizada**.

Se você tem interesse na história do surgimento do React pode conferir este vídeo chamado [React.js: The Documentary](https://www.youtube.com/watch?v=8pDqJVdNa44) feito pela [Honeypot](https://www.youtube.com/@Honeypotio).

## Conceitos básicos

### Como React funciona?

React utiliza o Virtual DOM (Document Object Model) que é uma representação do DOM no navegador. Isso permite com que ele realize atualizações em partes específicas da página web ao invés de reescrever a página inteira, aumentando a performance.

Quando o estado ou propriedades de um componente mudam, o React vai criar uma nova versão do Virtual DOM e comparar a nova versão com a anterior para determinar o que mudou.

Uma vez que as modificações foram identificadas, React atualiza o DOM com o mínimo de operações necessárias para que espelhe o Virtual DOM. Esse processo é conhecido como `reconciliation`.

O uso do Virtual Dom permite realizar atualizações de forma mais eficiente pois manipula menos o DOM, trabalho que pode ser lento e exigir intenso processamento. Isso pode ser percebido principalmente em dispositivos lentos ou quando estamos lidando com quantidades grandes de dados.

### O que são componentes?

Um componente React é uma função Javascript ou classe que retorna um elemento React o qual representa um pedaço de interface da aplicação. Componentes podem aceitar argumentos ( `props` ) e gerenciar seu próprio estado.

### Qual é a diferença entre estado e props?

Tanto o estado como props são utilizados para armazenar dados nos componentes React mas servem a diferentes propósitos e tem diferentes características.

As propriedades ( `props` ) são uma maneira de passar dados de um componente pai para um componente filho. Elas são de somente leitura ( `read-only` ) e não podem ser modificadas pelo componente filho.

Estado, por outro lado, é uma estrutura de dados (objeto) que contém os dados (valores) do componente que podem ser alterados a medida que o tempo passa. Pode ser atualizado utilizando o método `setState()` e é usado para controlar o comportamento e renderização do componente.

A atualização do estado dispara uma re-renderização do componente possibilitando exibir os valores atualizados dinamicamente. React atualiza o estado de forma assíncrona e em lote, garantindo de múltiplos `setState()` possam ser combinados em uma única atualização para melhorar a performance.

### Como compartilhar um mesmo estado entre múltiplos componentes que não tem relação pai-filho?

Utilizar React Context é uma maneira de compartilhar este estado sem necessitar ter um elemento pai e repassar os dados diversos níveis abaixo. O contexto é criado com um `provider` e consumido utilizando um hook chamado `useContext`.

Em outras palavras, a [ContextAPI](https://reactjs.org/docs/context.html) assim como o [Redux](https://react-redux.js.org/), resolve esse problema dentro do React chamado **Prop Drilling** que consiste no fato de você ter que passar props de um pai para um filho, para o filho desse filho e assim por diante.

### Se o React é utilizado para criar Single Page Applications, como ele lida com rotas?

O React não é "preparado de fábrica" para lidar com rotas e para realizar isso pode utilizar dependências. A biblioteca mais famosa é a [React Router](https://www.npmjs.com/package/react-router).

Existe outro cenário que é a utilização de frameworks que fazem renderização Server-side, por exemplo, o [Next.js](https://nextjs.org/). E ele possui seu método próprio. 

## Em breve continuamos...

Próximo tópico: **Quando você não deve utilizar React...**  

Alguns posts para antecipar a leitura:

- [React Popularity and When Not to Use React](https://scotch.io/starters/react/react-popularity-and-when-not-to-use-react)
- [Stop Using React for EVERYTHING!](https://medium.com/@zackargyle/stop-using-react-for-everything-c8297ac1a644#.tdd4fptdd)

## Referências

- [Top 20 React.JS interview questions](https://dev.to/said7388/top-20-reactjs-interview-questions-3a0m)