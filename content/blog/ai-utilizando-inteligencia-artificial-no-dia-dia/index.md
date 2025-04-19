---
authorid: 1
category: Dev
title: "AI: Utilizando inteligência artificial no dia a dia"
date: "2024-07-31T00:00:00.000Z"
description: "Nosso objetivo hoje é agilizar o dia a dia com IA"
---

## Anúncio

Começo esse post dizendo que tenho conhecimento que Inteligência Artificial não é a solução para todo e qualquer problema.  
No entanto, acredito que podemos confiar algumas tarefas de baixa complexidade do nosso cotidiano a IA, de modo que economizemos nosso tempo e sejamos mais eficazes.

Poderíamos conversar sobre diversos pontos relacionados a esse assunto (mas não vamos):

- **O ponto de vista ético, da lei e jurisprudência na utilização e geração do conteúdo**: quem produz, quem recebe, quem tem seu conteúdo apropriado, quem deveria ser cobrado ou pago;
- **O fator humano na criação de uma peça**: A originalidade, a criatividade, a concorrência desleal, o papel dos desenvolvedores contra vieses;
- **Transparência e Rastreabilidade**: De onde vem esses dados, até que ponto meus dados são coletados, onde eles são utilizados, qual é o ciclo de vida desses dados;
- **Transformações no mercado de trabalho**: desemprego, barreira social/tecnológica, abismo tecnológico e seus efeitos na sociedade;

Então só vou deixar os tópicos acima, caso você ainda não tenha parado para pensar sobre isso...

## Introdução

Sabemos que Inteligência Artificial é a capacidade de sistemas computacionais de imitarem as funções cognitivas dos seres humanos de aprendizagem e resolução de problemas.

E que ela precisa de 3 coisas:

- **Dados**: entrada da informação
- **Processamento ou rede neural**: cérebro artificial composto por algoritmos que imitam a capacidade de fazer conexões
- **Respostas**: saída de dados que retroalimentam o aprendizado do sistema

Sendo que a IA Generativa tem a capacidade de manipular e analisar dados existentes, **criando dados novos e originais** (preste bastante atenção nisso). Essa habilidade de gerar novos conteúdos (segundo experts do campo) de alta qualidade (digamos que nem sempre) e aplicá-los em uma vasta gama de contextos é o que torna a IA generativa inovadora e empolgante.

Também sabemos que quando ela não está devidamente calibrada e não tem dados suficientes para responder a determinadas perguntas, ela pode alucinar. E o resultado é respostas malucas como colocar cola na pizza pra grudar o queijo na massa (os italianos piram).

## Engenharia de Prompt

> A maioria das pessoas não sabem pedir ou não sabem o que querem.  
> Conhecimento e pensamento crítico sempre serão necessários na jornada.

Essa fala é minha mesmo e se você prestou atenção no tópico anterior vai entender que se a IA manipula e analisa dados existentes para criar novos e aprende com isso, você vai precisar fazer as perguntas certas para desafiá-la e conseguir o resultado desejado.

A alcunha que tem sido veiculada para essa habilidade de entender como se comunicar com a Inteligência Artificial é **Engenharia de Prompt**.

Como em tudo na vida, existem alguns macetes, nesse caso, também chamados de **prompt frameworks**. Se você procurar por `inteligencia artificial prompt frameworks` ou `ai prompt frameworks` vai encontrar diversos resultados.

Eles são basicamente conjuntos de direcionamentos para que você forneça os dados necessários para a IA e atinja o melhor resultado possível.

Entenda que nenhum deles é uma bala de prata e pode ser que sejam necessárias adaptações e diversas tentativas para chegar num resultado que você ache satisfatório.

Vou compartilhar aqui os que mais tenho utilizado.

### Prompts

**Prompt de Pareto**: {{ Escreva o seu objetivo }}. Identifique e compartilhe 20% dos aprendizados mais importantes que me ajudem a entender 80% desse objetivo.

**Prompts de Aprendizado**:

- Quais são temas que devo dominar para compreender {{ assunto }}
- Quero aprender {{ assunto }} do zero
- Crie um plano com as cinco áreas mais importantes para melhorar esta habilidade
- Transforme os pontos principais de {{ assunto }} em uma história ou narrativa
- Crie um teste para eu verificar meus conhecimentos sobre {{ assunto }}
- Ajude-me a aplicar {{ assunto }} em uma situação do mundo real
- Sou um desenvolvedor Pleno, quero me tornar um desenvolvedor Sênior. Crie um plano de aprendizado de 30 dias que me ajude a alcançar esse objetivo.

**Prompt de Resumo**: Resuma o artigo {{ url do artigo }} e me forneça uma lista dos aprendizados e insights mais importantes.

**Prompt de Resumo v2**: Escreva `Muito longo, não li` e passe três links, a IA trará um resumo.

**ELI5 - Explain like I'm 5**: Podemos trazudir esse comando como **explique como se eu tivesse 5 anos**, a IA fará analogias muito básicas envolvendo jogos ou blocos facilitando nosso entendimento sobre o assunto.

**Prompt PACIF**:

- Papel: Define o papel que você deseja que a IA desempenhe no contexto do problema;
- Ação: Direcione a ação desejada que você espera da IA;
- Contexto: Traga o contexto necessário e forneça informações e dados relevantes;
- Intenção: Declare sua intenção e direcione a resposta da IA para atender às suas necessidades;
- Formato: Define o formato da resposta desejada;

Exemplo:

- Papel: Líder de vendas, Desenvolvedor Frontend, jornalista.
- Ação: Gere ideias para aplicar IA no dia a dia.
- Contexto: Aqui estão listadas as atividades frequentemente realizadas no dia a dia (lista).
- Intenção: Destaque os pontos que tem maior probabilidade de gerarem resultados com o mĩnimo de esforço.
- Formato: Lista de tópicos com palavras-chaves e breves descrições.

## Bônus

Eu sei que todos nós temos preferências de uso, até mesmo quando o assunto é IA. No entanto, um outro macete é pegar o resultado dado por uma IA e inseri-lo em outra, pedindo que analise a resposta. Você pode conseguir um conteúdo complementar, um novo ponto de vista ou até uma crítica.

Portanto, pode ser uma boa alternar entre o [ChatGPT](https://chatgpt.com/), [Gemini](https://gemini.google.com/) e [Copilot](https://copilot.microsoft.com/).

Inclusive, se você usa o ChatGPT e tem interesse em ter respostas mais customizadas, após fazer login na plataforma clique na sua foto e depois no menu **Personalizar ChatGPT**. Nesse campo você pode dar instruções personalizadas. Vou deixar um exemplo abaixo:

O que você gostaria que o ChatGPT soubesse a seu respeito para fornecer melhores respostas?

```markup
Estou no Brasil; Fluente em pt-br, nível C1 em en-us e entendo es; Trabalho com desenvolvimento front-end; Me considere uma pessoa curiosa! Meus interesses profissionais são: frontend, backend, inteligência artificial, user experience, design gráfico, javascript, typescript, css, html, graphql, seo, métricas, google analytics, algoritmos, arquitetura de software, inovação tecnológica; Meus interesses pessoais são: livros, jogos ps4, escrever, tecnologias, gadgets, produtividade, cães e gatos, viagens, musculação, atividades ao ar livre, filosofia; Meus objetivos são: Me aprimorar como desenvolvedor Front-end, utilizar a IA pra me ajudar em processos do dia a dia e melhorar o desempenho da minha equipe e estar por dentro das atualizações tecnológicas recentes no que tange o escopo do meu trabalho.
```

Como o ChatGPT deveria responder?

```markup
Gostaria que as respostas sejam o mais detalhadas possível, num tom técnico. Ao mesmo tempo, explicando conceitos complexos como se eu tivesse 5 anos de idade. Explicando jargões e siglas que possam aparecer pelo caminho. Traga sempre as fontes consultadas para geração da resposta, principalmente se for expressar uma opinião sobre o assunto. Caso eu não dê contexto o suficiente, me faça perguntas. E indique conteúdos complementares, tais como: vídeos, cursos, artigos, tópicos no Github, StackOverflow e outros fóruns confiáveis.
```
