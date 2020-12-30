---
authorid: 1
category: Dev
title: "Docker: Preciso mesmo disso?"
date: "2020-12-26T18:38:00.284Z"
description: "Quando utilizar o Docker? É o que tentaremos descobrir nesse breve artigo."
tldr: "Quando utilizar o Docker? É o que tentaremos descobrir nesse breve artigo."
---

## O que é Docker?

Em poucas palavras: **Docker é uma ferramenta de administração de containers.**

Seu principal objetivo é colocar serviços e aplicações dentro de containers, disponibilizá-las e executá-las. Em outras palavras, ele permite que as aplicações fiquem independentes do sistema operacional onde estão rodando.

Seu principal propósito principal é automatizar o deploy de aplicações.

<div class="fx-group">

Pode ser definido como:

> Ferramenta de empacotamento de uma aplicação e suas dependências em um container virtual que pode ser executado em um servidor Linux. - [Hugo](https://www.youtube.com/watch?v=hCMcQfGb4cA)
</div>

## Por que usar o Docker? 

Existem diversos artigos sobre os pontos positivos e negativos do Docker, então não vou fazer chover no molhado. Selecionei os pontos mais importantes na minha opinião e indiquei uma leitura complementar.

Isso evita o famoso **Funciona na minha máquina** (Linux *vs* Mac *vs* Windows).

Evita o **dependency hell**, onde você pode precisar de uma biblioteca instalada em duas versões para rodar diferentes dependências de um mesmo projeto localmente.

Ainda falando de dependências, **agiliza o setup inicial**, uma vez que o necessário seria somente clonar um repositório e rodar comandos para criação e execução da imagem.

Permite que você trabalhe com ferramentas de CI (**Continuous Integration** / Integração Contínua) - [Jenkins](https://stackshare.io/jenkins), por exemplo -, para construir pipelines de deploy sem instalar diversas dependências adicionais. 

Se você tem dúvidas sobre **pipeline de deploy**, pode imaginar como uma sequência de comandos que são realizados de forma declarativa (um após o outro) e que se inicia com base num determinado gatilho. 

Esse gatilho pode ser um `git push origin main` (sua branch principal de produção) e, com isso, você pode ter configurado etapas de: lint, build, teste unitário, teste end-to-end, upload pra AWS, limpeza de cache de CDN, mensagem no Slack informando o resultado do deploy, entre outras coisas.

Falando do [Jenkins](https://www.jenkins.io/) em si, existem mais de 300 plugins.

Como leitura complementar aconselho o tópico [Porque usar Docker?](https://stack.desenvolvedor.expert/appendix/docker/porque.html) do livro [Docker para desenvolvedores](https://github.com/gomex/docker-para-desenvolvedores) do [@gomex](https://twitter.com/gomex).

## Preciso. E agora, o que vou fazer?

Se lendo os pontos acima você identificou que precisa, seja por questões projetuais ou porque sua atual empresa o utiliza na estrutura, vem comigo pro próximo post, saber [O Básico para utilizar Docker](/docker-guia-de-sobrevivencia-parte-1).


## Referências:

- [Docker, what is it and what is the purpose](https://stackoverflow.com/questions/28089344/docker-what-is-it-and-what-is-the-purpose)
- [8 Reasons Why Every Developer Should Use Docker](https://medium.com/swlh/8-reasons-why-every-developer-should-use-docker-and-you-wont-believe-5-c71f8a58cd83)
- [Por que usar Docker? Capítulo do livro 'Docker para desenvolvedores'](https://stack.desenvolvedor.expert/appendix/docker/porque.html)
