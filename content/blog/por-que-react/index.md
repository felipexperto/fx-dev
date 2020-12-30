---
authorid: 1
category: Dev
title: Por que me interessei pelo React?
date: "2020-03-05T23:00:00.284Z"
update: "2020-12-10T01:00:00.284Z"
description: "Um breve artigo sobre as diferenças de trabalhar somente com Javascript/jQuery e um framework/lib"
tldr: "Este não é um artigo de <code><strong>React</strong> vs <strong>Vue</strong> vs <strong>Angular</strong></code>, poderia ser qualquer um, na real. No entanto, quero é salientar as diferenças de trabalhar somente com Javascript puro ou jQuery e iniciar a utilização de um framework ou lib parruda. Tendo em mente que todas as escolhas projetuais tem prós e contras."
---

Um dos motivos que teve um grande peso na minha decisão de troca de empresa foi as tecnologias as quais o mercado estava utilizando e eu não. Tenho um background em design e não em sistemas, porém, lendo artigos pude reparar que o *modus operandi* de construção de softwares o qual estava praticando não fazia parte das boas práticas e, para que esse cenário mudasse seria necessário alterar a stack também.

No episódio [#169 JavaScript: manual de sobrevivência 2020](https://hipsters.tech/javascript-manual-de-sobrevivencia-2020-hipsters-169) do Hipsters.tech comentaram uma história sobre o porquê de utilizar React na plataforma do Netflix considerando que não havia um alto nível de complexidade no layout e, durante um evento numa conversa informal com um dos engenheiros de lá surgiu a resposta: Nós tentamos fazer a nossa solução, no entanto, acabou escalando, temos a necessidade de nos adaptar a diversos devices, era necessário um tempo de tutoria para novos colaboradores e foi mais fácil adotar um padrão do mercado.

## Gerenciamento de estado

Tecnicamente falando, o principal ponto forte do React é o gerenciamento de estado:

> React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam. - [Reactjs.org](https://pt-br.reactjs.org/)

Isso quer dizer que a cada alteração que o usuário faz, você não precisa ter um elemento selecionado e atualizar manualmente seu estado. Por exemplo: Se você tiver um input de contador e fora dele um botão de mais e outro de menos, não é preciso criar funções e fazer um *bind* com `botaoAdiciona.addEventlistener('click', () => {})`.

## Componentização

A possibilidade de criar componentes com a lógica e estilos encapsulados vem logo em seguida. Isso quer dizer que você pode se preocupar menos com bugs relacionados a escopo (variáveis e funções), assim como sobreposição de regras CSS e ainda tem a possibilidade de utilizar imports com facilidade (permitindo uma organização melhor da sua aplicação).

## Server side rendering e React Native

O fato do React poder ser renderizado no servidor utilizando Node (aumentando a performance) e também poder gerar aplicações mobile com React Native é um *plus* a se considerar.

Por fim, utilizar uma tecnologia consolidada no mercado, com milhões de utilizadores, open source, bem documentado e com capacidade de importar pacotes e novas funcionalidades ajuda o projeto a escalar e ser mais estável.

## Em breve continuamos...

Próximo tópico: **Quando você não deve utilizar React...**  

Alguns posts para antecipar a leitura:

- [React Popularity and When Not to Use React](https://scotch.io/starters/react/react-popularity-and-when-not-to-use-react)
- [Stop Using React for EVERYTHING!](https://medium.com/@zackargyle/stop-using-react-for-everything-c8297ac1a644#.tdd4fptdd)
