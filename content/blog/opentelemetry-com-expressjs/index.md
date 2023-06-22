---
authorid: 1
category: Dev
title: OpenTelemetry com ExpressJS
date: "2023-06-22T23:00:00.284Z"
description: "Instrumentando OpenTelemetry numa aplicação Node com ExpressJS"
---

Hoje vamos falar um pouco sobre como realizar a instrumentação do [OpenTelemetry](https://opentelemetry.io/) numa aplicação Node utilizando o [ExpressJS](https://expressjs.com/pt-br/) para exibição de dados no Instana.

Cansado de ver exemplos que não me serviram, resolvi postar aqui como realizamos esse processo numa aplicação BFF (back-end for front-end) da equipe.

Dito isso, o objetivo era instrumentar a app de modo que as requisições externas e as chamadas ao Redis fossem monitoradas.

## Dados da aplicação

Abaixo estão alguns dados relevantes da aplicação onde o processo foi realizado:

- Node 18.16.0
- Express 4.17.1
- Redis 3.0.2


## Primeiro passo

Alterar o comando que roda a aplicação no `package.json`, no meu caso era o `npm start`:

```
"start": "NODE_ENV=production node dist/index.js",
```

Vamos adicionar ao comando acima a parte que executará um arquivo chamado `tracing.js` e iniciará o OpenTelemetry:

```
"start": "NODE_ENV=production node --require ./dist/utils/tracing.js dist/index.js",
```

Preste atenção em que pasta colocará seu arquivo `tracing.js`, no exemplo acima ele está na pasta `dist/utils` mas você pode criá-lo onde quiser.  
Se você criá-lo na raíz e utilizar um Dockerfile, lembre-se de incluí-lo na imagem.

## O arquivo tracing.js

Abaixo nós temos o código completo do nosso arquivo e farei alguns comentários.

- No próximo passo vamos instalar as dependências e você verá que nem todas serão importadas aqui mas são necessárias para o funcionamento correto;
- Se quiser mudar o tipo de importação de `require` para `import` é por sua conta e risco. Não tive bons resultados.
- Ao invés de utilizar a abordagem de executar o `tracing.js` pelo `package.json` tentei exportar o método e inseri-lo na `index.js` antes da inicialização do Express (tipicamente `const app = express()`), não funcionou.

```js
const { Resource } = require('@opentelemetry/resources')
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions')
const { registerInstrumentations } = require('@opentelemetry/instrumentation')
const { BatchSpanProcessor } = require('@opentelemetry/sdk-trace-base')
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node')
const { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express')
const { RedisInstrumentation } = require('@opentelemetry/instrumentation-redis')
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http')
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc')
const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api')

const logLevel = 'DEBUG'; // também pode receber o valor ERROR. indico após a implementação estar correta
const serviceName = '<nome-da-sua-aplicacao>';

try {
  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel[String(logLevel)])

  const exporter = new OTLPTraceExporter()

  const provider = new NodeTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
    }),
  })

  provider.addSpanProcessor(new BatchSpanProcessor(exporter))

  registerInstrumentations({
    tracerProvider: provider,
    instrumentations: [
      new HttpInstrumentation({ responseHook: (span) => {
        const { attributes: attrs = {} } = span
        span.updateName(`${attrs['http.method']} ${attrs['http.target']}`)
        span.setAttribute('functions.route', attrs['http.route'])
        span.setAttribute('functions.url', attrs['http.url'])
      },
      ignoreIncomingPaths: [/.*\/healthcheck/],
      }),
      new ExpressInstrumentation(),
      new RedisInstrumentation(),
    ],
  })

  provider.register()
} catch (error) {
  console.error('tracing.js catch', { error })
}
```

## Dependências

Escolha seu terminal preferido e vamos lá:

```
npm install --save @grpc/grpc-js @opentelemetry/api @opentelemetry/exporter-trace-otlp-grpc @opentelemetry/instrumentation @opentelemetry/instrumentation-express @opentelemetry/instrumentation-http @opentelemetry/instrumentation-redis @opentelemetry/resources @opentelemetry/sdk-node @opentelemetry/sdk-trace-base @opentelemetry/sdk-trace-node @opentelemetry/semantic-conventions
```

## Sobre auto instrumentação

Testei libs como [@opentelemetry/auto-instrumentations-node](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node) e [@opentelemetry/auto-instrumentations-web](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-web) que prometem reconhecer automaticamente telemetria de diversos tipos de bibliotecas e frameworks populares e tive uma péssima experiência.

Um dos erros que enfrentei e não consegui resolver utilizando essas libs foi:

```
Module @grpc/grpc-js has been loaded before @opentelemetry/instrumentation-grpc so it might not work, please initialize it before requiring @grpc/grpc-js
```

Caí neste tópico do StackOverflow: [Adding opentelemetry tracing to Node.js app breaks require("fs").realpathSync.native](https://stackoverflow.com/questions/74834572/adding-opentelemetry-tracing-to-node-js-app-breaks-requirefs-realpathsync-n), tentei os modos indicados, também cavoquei mais fundo a web e nada. Desencorajo o uso.

Se você precisa instrumentar algo que não está no exemplo, aconselho:

- Acessar o tópico [Supported Instrumentations](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node#supported-instrumentations) do `@opentelemetry/auto-instrumentations-node`;
- Escolher o módulo, por exemplo, [koa](https://github.com/open-telemetry/opentelemetry-js-contrib/tree/main/plugins/node/opentelemetry-instrumentation-koa);
- Instalar a lib: `npm install --save @opentelemetry/instrumentation-koa`
- E adicionar no array `instrumentations` junto às demais;
