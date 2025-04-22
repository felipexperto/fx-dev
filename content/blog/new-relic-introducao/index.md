---
authorid: 1
category: Dev
title: New Relic - Introdução e conceitos básicos
date: "2022-12-21T00:00:00.000Z"
description: "Breve introdução sobre Monitoramento, Telemetria, Observabilidade e New Relic"
tldr: ""
---

# New Relic

O **New Relic** coleta informações da aplicação ou serviço através de um Agente que envia esses dados para sua plataforma APM (Application Performance Monitoring), que por sua vez salva esses dados e disponibiliza no formato de relatórios e dashboards padronizados. Essas informações coletadas podem ser tanto dados padrões que são coletados automaticamente quanto informações que o próprio desenvolvedor configura, caso ele queira alguma informação customizada ou específica.

O **Agente** é uma biblioteca de integração do New Relic com nossa aplicação, ele é fornecido pelo próprio New Relic como um SDK em diversas linguagens. Esse Agente faz o streaming em tempo real, ou seja, envia dados a cada 5 segundos. Muitas vezes sem necessidade de alteração do código fonte ele já consegue extrair informações como: CPU, memória, informações sobre o sistema operacional e uso de disco.

## Conceitos

### Telemetria

É a instrumentação de sistema (geralmente por meio de agentes de monitoramento) para que possam coletar automaticamente dados sobre o desempenho desses sistemas, transmitindo os dados para uma localização centralizada para análise subsequente.

### Observabilidade

Superconjunto de monitoramento, tendo em vista que se um sistema pode ser observável ele pode ser monitorado. Os três pilares da observabilidade são:

- Traces: Informações mais granulares;
- Metrics: Quando transformamos os dados em informação;
- Logs: Pontos específicos dentro de um trace.

### APM

Application Performance Monitoring é o serviço que oferece monitoramento total da sua aplicação, bem como monitoramento de performance, consumo de CPU e memória, transações e erros. É a principal ferramenta utilizada para construção de dashboards, onde você utiliza agentes para coleta de informações em tempo real das aplicações.

O APM permite monitorar vários tipos de serviços como:

- Containers
- Mobile Application
- Web Applications
- Clusters Kubernetes
- AWS Services
- GCP Services

### RED Method

Padrão de monitoramento de serviços derivado do "The Four Golden Signals" (criado pelos engenheiros do Google), focado em arquiteturas de microsserviços:

- Rate: o número de requests que o serviço está processando por segundo;
- Error: o número de requests que falharam por segundo;
- Duration: a quantidade de tempo que demorou para processar uma request;

Importante citar que o board inicial do New Relic se baseia nesse padrão para gerar outras métricas.

### Distributed Trace

É basicamente você conseguir rastrear ações do usuário, ou seja, por meio de um único id identificar as requisições e as informações que ele passa.

### NRQL

NRQL é uma linguagem própria do New Relic para consulta de informações. Ela possui uma sintaxe bem parecida com a linguagem SQL mas com algumas diferenças. Você terá que utilizá-la para montar seus dashboards personalizados.

## Métricas mais relevantes

### Apdex ( Application Performance Index )

Um dos principais índices do New Relic. O cálculo é feito em cima das requests. É aplicado um filtro baseado numa métrica chamada de `threshold` que tem seu valor padrão estabelecido como 0.5 segundos.

Após aplicado o filtro as requests são classificadas entre:

- Satisfied: `Request < Threshold`
- Tolerating: `Request > Threshold`
- Frustrated: `Request > (4 x Threshold)`

E, por fim, feito o seguinte cálculo:

```txt
Apdex = (Satisfied + (Tolerating x 2)) / Total number of requests
```

### Throughput

O Throughput mede o tráfego de usuários (no APM do New Relic é medido como requests por minuto). Vale dizer que não se trata exatamente de visitas de usuários, qualquer request, como um consumo de API ou até uma página que é embedada por meio de um iframe, são consideradas nesta conta.

### Response time

Segundo a documentação do New Relic, [Response time](https://docs.newrelic.com/docs/apm/apm-ui-pages/monitoring/response-time-chart-types-apm-browser/#time) é a duração de uma transação da perspectiva da aplicação solicitante e, não necessariamente é a soma total do tempo gasto na transação em si.

Saindo da tradução literal e partindo para interpretação, na minha opinião o parágrafo acima diz que "é mas não é". Então o que é importante saber?

Saber que gráficos de Response Time permitem que você monitore a saúde da sua aplicação observando a média normal de tempo de resposta quando uma aplicação frontend faz chamada para uma aplicação backend e, se o Response Time aumenta, algo de errado está acontecendo no processamento de suas requisições (neste caso, no backend).

#### Trazendo para o cotidiano

Imagine que você tem uma aplicação chamada `FrontendAdmin`. Ela utiliza NextJS com SSR (Server Side Rendering), é uma administração dos seus clientes e requisita informações de diversas aplicações backend.

Dentre suas páginas temos a Página de edição de dados pessoais de usuário.

Ao entrar na página é feita uma requisição, essa requisição solicita as informações para uma aplicação chamada `BackendPersonalData` e depois o front mostra os campos do formulário.

Agora, vamos adicionar um pouco de caos. Alguém resolveu fazer um update na base de dados e isso travou a tabela de usuários. Antes a aplicação `BackendPersonalData` recebia em 100ms a resposta do banco, agora está recebendo em 5 segundos, isso quando a conexão não é encerrada por Timeout.

Como você é uma pessoa sêniorzona, já tinha configurado os alertas para que quando o Response Time ficasse muito alto em comparação com a média, fossem enviadas notificações para o Slack.

Nesse momento você está olhando para o gráfico de Response Time da `FrontendAdmin` e vendo que a linha da aplicação `BackendPersonalData` está subindo mais que o Monte Everest enquanto as outras aplicações estão mantendo sua regularidade. Além disso, o Throughput está normal.

Você pula para o gráfico de Response Time da `BackendPersonalData` e vê que está tudo bem mas o gráfico de Error rate está subindo. E partimos para o próximo tópico.

### Error rate

Olhando o gráfico de Error rate também é possível observar o aumento. Agora você pode ir até a aba chamada Errors Inbox ([veja esse vídeo de exemplo](https://www.youtube.com/watch?v=6zRkpPTVjwc)) e com certeza sua mensagem padrão de erro de conexão com a base de dados estará lá.

E se o problema fosse uma terceira aplicação a qual providencia informações para o `BackendPersonalData` também seria possível identificar por meio do gráfico de Response time. Isso é muito útil quando se está trabalhando com grandes ecossistemas onde existe uma cadeia de dependências e as aplicações são consumidas por múltiplas equipes.

### CPU and Memory usage

Esse é auto-explicativo, uso de memória e CPU. Bem útil para quem trabalha com Kubernetes e tem várias instâncias/containers/pods de suas aplicações rodando.

## Métricas de performance percebida

Depois de passarmos por tudo isso, tenho que dizer que nem só dessas métricas vive quem desenvolve no front. Se você ainda não ouviu falar de Métricas de performance percebida, veja o post [Métricas de performance percebida no frontend com New Relic](/new-relic-metricas-performance-percebida).

## Referências

- Palestra sobre New Relic ministrada por Vittoria Zago no Luizalabs;
- Documentação do New Relic.
