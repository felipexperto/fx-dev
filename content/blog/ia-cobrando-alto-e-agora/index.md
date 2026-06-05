---
authorid: 1
category: Dev
title: "IA cobrando alto, e agora? Guia de sobrevivência"
date: "2026-06-04T22:30:00.000Z"
description: ""
tldr: ""
---

Olá, pessoa! Tudo bem?

Sem muita enrolação, vamos conversar sobre uma mudança estrutural que está mexendo no nosso dia a dia. Aviso de post longo pela frente, mas necessário. Se você já leu textos anteriores, sabe que a intenção aqui é propor um diálogo prático para que você finalize essa leitura sabendo exatamente como adaptar sua rotina.

Muitas vezes, adotamos novas ferramentas de tecnologia sem olhar para o custo oculto que elas carregam. Porém, com as recentes mudanças, a forma como consumimos Inteligência Artificial na nossa IDE precisa se adaptar.

## Introdução (O Fim do "All You Can Eat")

A partir de 1 de junho de 2026, [sofremos um verdadeiro choque](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/) (~~de monstro~~): o GitHub Copilot e outras plataformas abandonaram o modelo de assinatura fixa para adotar o *Usage-Based Billing* (UBB), cobrando estritamente pelo uso de tokens. 

O que antes era um buffet livre de código gerado por IA (Premium Requests ilimitados), agora funciona à base de "GitHub AI Credits". Isso significa que os planos Copilot Pro (US$ 10) e Pro+ (US$ 39) continuam com os mesmos preços base, mas agora incluem apenas essa quantia exata em créditos mensais. 

Quando a cota acaba, os *fallback experiences* (o antigo downgrade gratuito para modelos mais baratos) não estão mais disponíveis. 😭

A partir daí, cada interação passa a ser descontada em créditos extras do seu bolso ou orçamento da empresa. 👀

Muitos devs, acostumados com longas sessões autônomas de código, enfrentaram um impacto direto no dia 1, quem sentiu curiosidade de "testar o novo modelo de cobrança" facilmente chegou nos 50% da cota no primeiro dia. Fora o salto nas cobranças...

## Por que o custo disparou? (A Anatomia do Desperdício de Tokens)

Para entender a fatura, precisamos entender o peso invisível dos tokens, que se tornaram a "moeda da IA". 

Primeiro, é essencial diferenciar **Input** (o que você envia para o modelo) e **Output** (o que o modelo responde). O grande dreno de dinheiro — e latência — não está nas respostas da IA, mas majoritariamente no que você *envia* para ela processar antes sequer de digitar a primeira linha de código. 

O custo disparou porque as ferramentas evoluíram de simples autocompletes para **plataformas agênticas** capazes de iterar por repositórios inteiros em múltiplos passos. Quando juntamos isso com maus hábitos de *prompting*, o desperdício é fatal:

- **A Ilusão do Contexto Sujo:** Enviar uma classe inteira de 2000 linhas apenas para a IA avaliar uma função Regex de 5 linhas.
- **O "Lost in the Middle":** Prompts e conversas extremamente longas sofrem de amnésia no meio do texto, forçando o desenvolvedor a repetir o contexto (e pagar por ele de novo) em loops de edição *multi-turn*.
- **Logs Gigantes:** O hábito de copiar e colar um *StackTrace* de erro inteiro no chat destrói o limite de contexto com milhares de avisos irrelevantes.
- **Peso do Código:** A tokenização é otimizada para o inglês. Chaves duplas `{{ }}`, espaçamentos bizarros e variáveis nomeadas em português brasileiro custam muito mais tokens para a IA processar matematicamente.

## Guia de sobrevivência: Estratégias Práticas para Devs (FinOps para Código)

Com base nas métricas atuais, não basta apenas saber codar; é preciso gerenciar seu orçamento de contexto na IDE. Aqui estão as táticas essenciais para otimizar seus créditos:


### O Gerenciamento e Revezamento de Modelos

A escolha certa da "categoria" do modelo torna a autonomia financeiramente viável.

| Modelo | Categoria | Custo de Input (US$) | Custo de Output (US$) | Casos de Uso Recomendados |
| :--- | :--- | :--- | :--- | :--- |
| **Gemini 3 Flash** | Lightweight | 0.50 | 3.00 | Tarefas rápidas como micro-agentes, triagem e logs. |
| **Claude Haiku 4.5** | Lightweight | 1.00 | 5.00 | Tarefas rápidas como micro-agentes, triagem e logs. |
| **Claude Sonnet 4.6** | Versatile / Powerful | 3.00 | 15.00 | "Padrão ouro" estritamente para raciocínio complexo e orquestração final. |
| **Claude Opus 4.7** | Versatile / Powerful | 5.00 | 25.00 | Estritamente para raciocínio complexo e orquestração final. |


### Técnicas de Chat (Compactação)

O acúmulo de contexto degrada a IA. Utilize o recurso de **"Compact Conversation"** (compactar a conversa) regularmente para "resumir" as informações retidas, economizando tokens preciosos na janela de contexto.


### O Modo Ask como Padrão no VSCode

Já que estamos na "época das vacas magras" e cada requisição conta, uma tática simples é forçar a IA a ser mais consultiva em vez de sair gerando código de forma proativa. Para habilitar o modo Ask do Copilot como o padrão em toda nova sessão, basta abrir o seu arquivo `settings.json` (pode ser o do workspace ou o do usuário) e adicionar a seguinte configuração: `"chat.newSession.defaultMode": "Ask"`. Isso evita por exemplo que ela saia reescrevendo um arquivo inteiro por causa de uma alteração de duas linhas.

### A "Gestão de Abas" e Chats Limpos

A IA usa a regra da "Intenção". Se você tem 15 arquivos abertos no VSCode, ela assume que todos importam, processando e gastando tokens à toa. Feche abas irrelevantes antes de dar `Enter` em novas tarefas. Além disso, crie um arquivo `.copilotignore` para bloquear a leitura de pastas compiladas (`dist/`) e mocks JSON pesados.

### Agrupamento de Instruções (Batching) vs Micro-prompts

Mude a forma como pede correções. O pior cenário de custo é pedir: "Reescreva o arquivo inteiro aplicando esta pequena mudança". Ao invés de forçar o reprocessamento, especifique: "Gere apenas a linha alterada". 

Para o *mesmo* problema, utilize a mesma sessão para tirar proveito do **Prompt Caching** (que economiza tokens de entrada reusando os estados pré-computados). Mas, assim que a fase ou tarefa mudar, inicie um chat limpo para não carregar lixo de contexto antigo.

### Dica Extra - Ferramentas de Minificação

Considere usar extensões como a *Skill Caveman* (modo homem-das-cavernas), que inibe respostas excessivamente educadas ("Certamente! Ficarei feliz em ajudar...") e força a IA a devolver apenas o código seco. 

No entanto, cuidado com a segurança: ferramentas que mexem com tokens, como o Rust Token Killer (RTK), já sofreram ataques de *supply chain* recentemente, então sempre fixe (*pin*) a versão de seus plugins. 

Dizem que uma alternativa local sem dependências é o *Tokenix*, que envia apenas o "esqueleto" das funções, poupando até 90% do custo (*disclaimer*: eu não testei).

### Dica Extra - Apelando para o AGENTS.md

Assim como usamos o `README.md` para guiar desenvolvedores humanos, a criação de um arquivo `AGENTS.md` na raiz do seu repositório (ou `.github/copilot-instructions.md`) tornou-se a documentação de arquitetura nativa para a IA. 

Nós acabamos de comentar, LLMs são tagarelas e excessivamente educados e, além disso, eles costumam gerar códigos super-comentados e verbosos apenas para que eles mesmos não se percam em leituras futuras. 

Para se blindar contra esse desperdício, utilize o `AGENTS.md` para estabelecer regras estritas de saída (*Output Rules*). Instrua a máquina a ser concisa, precisa e focada puramente na implementação. Determine explicitamente que a IA deve retornar apenas as alterações de código necessárias, sem escrever tutoriais, sem explicar códigos óbvios e sem comentários de marketing. Cortar essa verbosidade poupa milhares de tokens e reduz drasticamente o tempo de latência das respostas.

E tenho um pronto pra você: <a href="https://gist.github.com/felipexperto/243d808e633da1af146f7652d699bb16" target="_blank">AGENTS.md</a>

## Conclusão (A Nova Skill do Dev Moderno)

O maior erro na engenharia de IA hoje é dar o contexto de um repositório inteiro e pedir para um "Mega Agente" fazer tudo. Dividir para conquistar, orquestrando subagentes com contextos restritos é o esquema.

Gerenciar o orçamento de contexto não é mais uma função exclusiva de gestores ou arquitetos cloud; saber orquestrar IAs com eficiência de custos, escolhendo o modelo adequado e estruturando as entradas, virou uma **nova habilidade técnica essencial** para as pessoas engenheiras de software. 

A caminhada é longa, mas dominar o FinOps para Código é uma das habilidades importantes que vai diferenciar um profissional júnior de um sênior na atualidade. 

Se alguma dica serviu, compartilhe! 🤙
