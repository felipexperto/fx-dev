---
authorid: 1
category: Dev
title: "Como pensar ou escolher uma arquitetura de projeto"
date: "2021-09-18T00:00:00.000Z"
description: ""
tldr: ''
---




Como vemos arquitetura dentro da Gupy?

Até este ponto, algo que na minha opinião não pode ser ignorado ao pensar em arquitetura de projeto é o contexto da empresa.  
Usando poucas palavras para exemplificar, se você está em uma startup com equipe reduzida e pouco prazo, precisando lançar um produto para mostrar valor aos stakeholders e testar o modelo de negócio, taca-lhe-pau, use o que a equipe domina, não se martirize pensando em exceções e evoluções futuras, neste cenário é bem provável que você reconstrua o software em breve. Na outra ponta, se você está numa empresa com processos estabelecidos, modelo e regras de negócio claras, todo um ecossistema para interagir, sabendo que outras equipes usarão sua aplicação, é hora de estabelecer um período de estudo (seja uma sprint ou mais), se empenhar e entender que uma semana a mais dedicada para encontrar respostas para questionamentos é um investimento.








## Começando pela base: O que é Arquitetura de Software?

Pode ser considerada a:

> Análise e discussão sobre design dos componentes, responsabilidades e relacionamentos de uma aplicação e da estratégia que vai governar a evolução desses componentes com o objetivo de atender aos objetivos, atributos de qualidade e restrições de alto nível do negócio pensando em melhorar a produtividade em desenvolver, manter, atualizar, entregar(deploy) e operacionalizar software.

Uma boa arquitetura de software busca orientar e propiciar formas mais produtivas (mais desempenho e menor empenho) para que possamos no final do dia fazer entregas mais ajustadas às expectativas do negócio com esforço reduzido.

> Arquitetura de Software é sempre sobre design. Design nem sempre é arquitetura.  
> Em outras palavras, todas as decisões que você toma em arquitetura de software envolve design mas o contrário não.

### Neste contexto, o que são atributos de qualidade?

??????????????????


## Qual a diferença entre padrão arquitetural e padrão de projeto(design pattern)?

Os dois pontos principais são objetivo e escopo.  

### Padrão Arquitetural

Aplicado no projeto como um todo, ou seja, a aplicação inteira segue o padrão.  
Exemplos de padrões arquiteturais: Padrão Hexagonal ou Padrão de Camadas.

### Padrão de Projeto
Enquanto isso, um design pattern - ou padrão de código - é focado em resolver um problema específico, são *soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado* ([Opus Software](https://www.opus-software.com.br/design-patterns/)).


## Agora sim: Como pensar ou escolher uma arquitetura de projeto?

Não existe resposta simples para dizer como será a arquitetura do seu prõximo projeto não existe.

Basicamente você tem princípios importantes a serem seguidos - como desacoplamento - e o restante se resume em ir atrás de arquiteturas relacionadas ao que você precisa desenvolver, estudar e descobrir a melhor solução.

- Quais são as linguagens?
- Quais são os frameworks?
- Quais são as arquiteturas disponíveis (arquitetura hexagonal, arquitetura de camadas, onion architecture, clean architecture)?

Antes da arquitetura, pensar no desacoplamento.
É indicado que seu código tenha uma raíz/núcleo e desacoplado de framework, libs e afins.
Muita coisa em um arquivo só, por exemplo, causa uma dependência grande e engessa o sistema.
Por outro lado, não existe um sistema totalmente desacoplado, ou seja, um sistema onde um arquivo não conversa com outro arquivo.

Evitar dependências cíclicas, A que depende do B e B que depende do A.

Sistema modularizado com interface de comunicação entre eles bem definidas e poucas dependências externas.

Quando você escolhe uma arquitetura adequada para seu projeto, você já está usando uma solução que é resultado de anos de frustração e problemas enfrentados até maturar uma arquitetura que atendesse bem esse universo.


5 pontos importantes:

- Independência de framework;
- Independência de interface de usuário;
- Independência de de banco de dados;
- Independência de qualquer elemento externo;
- Independência de testabilidade;

## Por que pensar em arquitetura?

"Seu software não deve ser definido por framework" - Leonardo Leitão.

Se você tem um framework invasivo, ou seja, tudo o que você faz precisa ter uma herança de classe do framework ou um padrão de nomenclatura, talvez haja um ponto negativo para se atentar pois você está dependendo muito do framework para desenvolver sua aplicação.

> O quão fácil é testar o que estou criando? Esta pergunta pode ser um parâmetro para avaliar uma boa arquitetura.



## Arquitetura em Camadas

O padrão Layers é uma forma comum de organizar software, porém, as responsabilidades das camadas é ditada por quem desenvolve.





## Arquitetura Hexagonal (ou Portas e Adaptadores)

Criada por Alistair Cockburn, apresentada como um modelo alternativo à Arquitetura de Camadas.  
O espírito é reduzir o acoplamento e facilitar processos de integração.
                                                                            
A ideia é criar sua aplicação para trabalhar sem UI ou banco de dados de forma que você possa rodar testes de regressão automatizados, trabalhar quando a base de dados estiver indisponível e conectar a outras aplicações sem envolvimento do usuário.

- **Porta** visa conectar a aplicação com um agente externo, ou dispositivo, por exemplo, interface com usuãrio ou aplicação terceira ou banco de dados;
- **Adaptadores** são os meios de ligação que traduzem o que está acontecendo na aplicação através da porta com o mundo real;

Por exemplo:  ?????????????????????????????


## Clean Architecture (Arquitetura Limpa)

Conceito criado por Robert C. Martin (Uncle Bob).

A arquitetura não depende de nenhuma ferramenta externa;
Testabilidade, onde as regras de negócio do projeto podem ser testadas sem necessidade de interface, banco de dados, servidor web ou qualquer outro servidor externo;
Independência da Interface do Usuário, por exemplo, uma interface gráfica poder ser substituída por linha de código;
Independência do banco de dados com zero impactos das regras de negócio;





## Referências

- [Como Pensar a Arquitetura de um Projeto?](https://www.youtube.com/watch?v=jGQEgDb0KGg)
- [Opus Software - O que são Design Patterns?](https://www.opus-software.com.br/design-patterns/)
- [Descomplicando "Arquitetura Hexagonal"](https://www.youtube.com/watch?v=V7JnDDQY1m0)
- [O que é Arquitetura de Software? | Fundamentos de Arquitetura de Software | Parte 01](https://www.youtube.com/watch?v=jUH5lKfpWE0)
- []()
- []()






