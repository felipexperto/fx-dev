---
authorid: 1
category: Dev
title: Como pensar ou escolher uma arquitetura de projeto
date: "2022-12-29T00:00:00.284Z"
description: "Uma boa arquitetura de software busca orientar e propiciar formas mais produtivas (mais desempenho e menor empenho) para que possamos no final do dia fazer entregas mais ajustadas às expectativas do negócio com esforço reduzido."
tldr: ""
---

## O que é Arquitetura de Software?

Pode ser considerada a:

> Análise e discussão sobre design dos componentes, responsabilidades e relacionamentos de uma aplicação e da estratégia que vai governar a evolução desses componentes com o objetivo de atender aos objetivos, atributos de qualidade e restrições de alto nível do negócio pensando em melhorar a produtividade em desenvolver, manter, atualizar, entregar(deploy) e operacionalizar software.

Uma boa arquitetura de software busca orientar e propiciar formas mais produtivas (mais desempenho e menor empenho) para que possamos no final do dia fazer entregas mais ajustadas às expectativas do negócio com esforço reduzido.

> Arquitetura de Software é sempre sobre design. Design nem sempre é arquitetura.  
> Em outras palavras, todas as decisões que você toma em arquitetura de software envolve design mas o contrário não.

## Ainda não entendi, afinal, o que é Design Arquitetural?

> [Design Arquitetural por Elemar Jr](https://www.youtube.com/watch?v=iWX5-LDbRN)  
> Design Arquitetural são as decisões que terão impacto direto e inquestionável no atendimento aos objetivos de negócio, no respeito às restrições e no atingimento aos atributos de qualidade.
>
> Por exemplo, decidir se vou ter cache ou não na aplicação é uma decisão arquitetural pois impacta na qualidade, segurança e outros pontos importantes a serem avaliados.
>
> Já o nome de uma classe dificilmente terá relevância arquitetural, é uma decisão importante de design mas geralmente não contém tamanha importância.

## Qual a diferença entre Arquitetura de Projeto (padrão arquitetural) e Padrão de Projeto (design pattern)?

Os dois pontos principais são **objetivo** e **escopo**.

### Arquitetura de Projeto

Aplicado no projeto como um todo, ou seja, a aplicação inteira segue o padrão.  
Exemplos de padrões arquiteturais: Padrão Hexagonal ou Padrão de Camadas.

### Padrão de Projeto

Enquanto isso, um design pattern - ou padrão de código - é focado em resolver um problema específico, são _soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado_ ([Opus Software](https://www.opus-software.com.br/design-patterns/)).

## Como escolher uma arquitetura de projeto?

> Autor Desconhecido  
> Quando você escolhe uma arquitetura adequada para seu projeto, você já está usando uma solução que é resultado de anos de frustração e problemas enfrentados até maturar uma arquitetura que atendesse bem esse universo.

Não existe resposta simples para dizer como será a arquitetura do seu próximo projeto.

Basicamente você tem princípios importantes a serem seguidos - como desacoplamento - e o restante se resume em ir atrás de arquiteturas relacionadas ao que você precisa, em outras palavras, é preciso desenvolver, estudar e descobrir a melhor solução.

> [Elemar Jr.](https://www.youtube.com/watch?v=iWX5-LDbRNs)  
> **Arquitetura é a arte de resolver treadoffs**. Se você não sabe do que você está abrindo mão ao tomar uma decisão é provável que você não tem fundamentação boa para tomar essa decisão.

### Perguntas úteis para dar início a pesquisa

- Quais são as linguagens disponíveis?
- Quais são os frameworks disponíveis?
- Quais são as arquiteturas disponíveis (arquitetura hexagonal, arquitetura de camadas, onion architecture, clean architecture)?

### Antes de aplicar a arquitetura, pense no desacoplamento

- É indicado que seu código tenha uma raiz/núcleo e desacoplado de framework, bibliotecas e afins.
- Muita coisa em um arquivo só, por exemplo, causa uma dependência grande e engessa o sistema.
- Por outro lado, não existe um sistema totalmente desacoplado, ou seja, um sistema onde um arquivo não conversa com outro arquivo.
- Evitar dependências cíclicas, A que depende do B e B que depende do A.
- Sistema modularizado com interface de comunicação entre eles bem definidas e poucas dependências externas.

> Leonardo Leitão  
> O quão fácil é testar o que estou criando? Esta pergunta pode ser um parâmetro para avaliar uma boa arquitetura.

### 5 pontos importantes

- Independência de framework;
- Independência de interface de usuário;
- Independência de de banco de dados;
- Independência de qualquer elemento externo;
- Independência de testabilidade;

## Sempre devo aplicar uma arquitetura de projeto?

Baseado no que estudei, não tenho resposta pra isso e acredito que esse seja um dos tópicos mais polêmicos dentre todos deste post. Cada projeto tem um contexto, cada empresa tem sua cultura e cada pessoa que desenvolve tem suas preferências.

Abaixo deixo uma citação que achei interessante. Ela foi retirada do vídeo [Arquitetura de Software: Como funciona a Gupy](https://www.youtube.com/watch?v=mLCZj9Psqu8) do canal no Youtube da [BrazilJS](https://www.youtube.com/@BrazilJS).

> Robson Ventura, na época CTO da Gupy  
> Até este ponto, algo que na minha opinião não pode ser ignorado ao pensar em arquitetura de projeto é o contexto da empresa.
>
> Usando poucas palavras para exemplificar, se você está em uma startup com equipe reduzida e pouco prazo, precisando lançar um produto para mostrar valor aos stakeholders e testar o modelo de negócio, taca-lhe-pau, use o que a equipe domina, não se martirize pensando em exceções e evoluções futuras, neste cenário é bem provável que você reconstrua o software em breve.
>
> Na outra ponta, se você está numa empresa com processos estabelecidos, modelo e regras de negócio claras, todo um ecossistema para interagir, sabendo que outras equipes usarão sua aplicação, é hora de estabelecer um período de estudo (seja uma sprint ou mais), se empenhar e entender que uma semana a mais dedicada para encontrar respostas para questionamentos é um investimento.

## Por que pensar em arquitetura de software?

Porque um software bem estruturado torna fácil o trabalho de adaptação ao fazer mudanças incrementais e gerar valor. E o que é esse valor?

### O que define o valor de um software?

- Ter as funcionalidades que o negócio precisa;
  - Em outras palavras, atender os objetivos do negócio;
- Respeitando restrições;
  - Ter que trabalhar no serviço de nuvem X;
  - Construído usando determinado recurso ou orçamento;
  - Dentro dos conhecimentos que o time já tem;
- Atingindo parâmetros em atributos de qualidade;
  - Suportar uma escala de X usuários;
  - Ter disponibilidade de 99.7% do tempo ou somente horário comercial;
  - Preencher X pré-requisitos de segurança;
- Possibilidade de ser adaptado para acomodar novas funcionalidades, respeitando novas restrições e atingindo novos parâmetros em atributos de qualidade;

Lembrando que cada software de uma maneira geral terá uma demanda diferente ditada pelos atributos de qualidade.

## Referências

- [Como Pensar a Arquitetura de um Projeto?](https://www.youtube.com/watch?v=jGQEgDb0KGg)
- [Opus Software - O que são Design Patterns?](https://www.opus-software.com.br/design-patterns/)
- [O que é Arquitetura de Software? | Fundamentos de Arquitetura de Software | Parte 01](https://www.youtube.com/watch?v=jUH5lKfpWE0)
- [Arquitetura de software no mundo real: O mínimo que todo dev precisa saber](https://www.youtube.com/watch?v=iWX5-LDbRNs)
