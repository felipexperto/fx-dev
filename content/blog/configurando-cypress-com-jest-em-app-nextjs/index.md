---
authorid: 1
category: Dev
tags:
  - blog/category/dev
title: "Configurando Cypress com Jest em app NextJS"
date: "2024-05-17T11:05:00.000Z"
description: "Exemplo prático de como implementar Cypress num projeto NextJS que já contém testes de unidade com Jest"
tldr: ""
---

Salve, pessoa! Como estás?

Hoje a ideia do post é simples: Configurar o Cypress pra gerar coverage num projeto NextJS que já possui Jest.

Este post não inclui:

- Reexplicação do que já está escrito nas documentações oficiais;
- Como criar uma aplicação NextJS do zero;
- Como instalar o Jest;
- Como executar o Cypress (leia a documentação);
- Como fazer o merge (junção) do coverage do Jest e Cypress;
- Como fazer o processo em aplicações Typescript;

Vamos começar detalhando as tecnologias do projeto e depois a instalação.

## Tecnologias e versões

### Engine

```
node v16.20.0
```

### Node Package Manager

```
npm v8.19.4
```

### Dependencies

```
"babel-plugin-module-resolver": "^4.1.0",
"next": "^12.3.4",
"next-compose-plugins": "^2.2.0",
"next-optimized-images": "^2.6.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
```

### devDependencies

```
"@testing-library/jest-dom": "^6.1.3",
"@testing-library/react": "^14.0.0",
"@testing-library/react-hooks": "^8.0.1",
"@testing-library/user-event": "^14.5.1",
"babel-eslint": "^10.1.0",
"babel-loader": "^8.1.0",
"babel-plugin-inline-react-svg": "^2.0.1",
"babel-plugin-styled-components": "^1.10.7",
"jest": "^26.0.1",
"jest-css-modules": "^2.1.0",
"jest-junit": "^16.0.0",
```

## Instalação do Cypress e dependências de desenvolvimento necessárias

```bash
npm install @cypress/code-coverage babel-plugin-istanbul cypress@12.17.2 istanbul-lib-coverage nyc cypress-wait-until --save-dev
```

Confira as libs:

- **@cypress/code-coverage**: Integração de cobertura de código com Cypress, coletando e reportando cobertura durante os testes de end-to-end.
- **babel-plugin-istanbul**: Plugin Babel para adicionar instrumentação de cobertura de código usando Istanbul, para rastrear quais partes do código foram executadas.
- **cypress@12.17.2**: Framework de teste de front-end end-to-end para aplicações web, que permite escrever e executar testes automatizados em navegadores. Estamos utilizando exatamente a versão 12 porque a 13 está apresentando problemas de coverage no momento que este post é escrito
- **istanbul-lib-coverage**: Biblioteca que fornece utilitários para a coleta e manipulação de informações de cobertura de código.
- **nyc**: Ferramenta de linha de comando para instrumentação de código e geração de relatórios de cobertura, baseada na biblioteca Istanbul.
- **cypress-wait-until**: Plguin que adiciona um comando personalizado ao Cypress, permitindo que você aguarde até que uma condição específica seja atendida antes de prosseguir com o teste, facilitando a espera por estados dinâmicos ou assíncronos da aplicação. Vamos utilizá-lo para criar um comando personalizado de nome `getByDataTestId`.

Lembre-se: Além da flag `--save-dev` para instalar como dev dependencies, se você instala as dependências do seu projeto com a flag `--legacy-peer-deps`, não esqueça de inseri-la no final do comando.

## Alterações no package.json

### Scripts

```
  "scripts": {
    "dev": "CYPRESS_ENV=true PROJECT_ENV=development PORT=3000 next dev",
    "pretest": "rm -rf .nyc_output || true",
    "test:e2e": "npm run pretest && nyc cypress open",
    "test:e2e-headless": "npm run pretest && nyc cypress run --headed",
  },
```

Acima temos os comandos:

- `dev`: Foi adicionada a env `CYPRESS_ENV` que nos auxiliará a fazer uma condicional do plugin `istanbul` no `babel.config.js` pois o Jest estava reclamando que o mesmo plugin foi inserido duas vezes;
- `pretest`: Remove a pasta `.nyc_output` antes de rodar os testes para que não seja cacheado;
- `test:e2e`: Pra execução local, permite que você controle os testes onde será aberta a janela do Cypress;
- `test:e2e-headless`: Comando para ser rodado na pipeline de CI. Repare que foi inserido uma flag `--headed` no final pois sem ela o coverage não estava sendo gerado. Ao rodar localmente são abertas e fechadas janelas a cada teste;

Para efeitos de documentação, o erro acusado pelo Jest antes da condicional com `CYPRESS_ENV`:

```
Duplicate plugin/preset detected.
    If you'd like to use two separate instances of a plugin,
    they need separate names, e.g.
```

### Configuração do nyc

```json
  "nyc": {
    "report-dir": "cypress-coverage",
    "extension": [
      ".js"
    ],
    "all": true,
    "include": [
      "src/containers/**/*.js"
    ],
    "exclude": [
      "cypress/",
      "src/containers/**/*.test.js"
    ],
    "check-coverage": true,
    "excludeAfterRemap": false,
    "reporter": [
      "lcov",
      "text-summary"
    ]
  },
```

Novamente, vamos percorrer comando por comando:

- **report-dir**: Define o diretório onde os relatórios de cobertura serão armazenados. No caso, os relatórios serão armazenados em cypress-coverage.
- **extension**: Lista de extensões de arquivo a serem consideradas ao procurar arquivos de código fonte para instrumentação. Aqui, apenas arquivos com extensão .js serão incluídos.
- **all**: Quando definido como true, instruirá o nyc a considerar todos os arquivos especificados no include para a instrumentação, mesmo que não sejam importados diretamente pelos testes. Isso garante que a cobertura de código inclua todos os arquivos relevantes.
- **include**: Lista de padrões glob que especificam quais arquivos devem ser incluídos na instrumentação de cobertura. Aqui, todos os arquivos `.js` dentro de `src/containers/` e seus subdiretórios serão incluídos.
- **exclude**: Lista de padrões glob que especificam quais arquivos devem ser excluídos da instrumentação de cobertura. Aqui, qualquer coisa dentro do diretório cypress/ e todos os arquivos de teste `.test.js` dentro de `src/containers/` serão excluídos.
- **check-coverage**: Quando definido como true, o nyc irá verificar se os valores de cobertura mínima foram atingidos e retornará um erro se não foram.
- **excludeAfterRemap**: Quando definido como false, evita que arquivos sejam excluídos após a remapear os arquivos fonte para a cobertura, mantendo os mapas de cobertura precisos.
- **reporter**: Lista de tipos de relatórios que devem ser gerados. Aqui, o nyc gerará relatórios no formato lcov (que pode ser visualizado em navegadores) e um resumo de texto (text-summary) que pode ser exibido no console.

**Atenção na chave `include`!** No meu caso vou testar somente os arquivos de `containers`, ou seja, aqueles que estão na minha pasta: `src/containers` e faremos uma hierarquia de diretórios semelhante dentro da pasta `cypress` alguns passos a frente.

## Alterações no babel.config.js

Neste projeto estou utilizando o arquivo `babel.config.js` na pasta raíz, pode ser que no seu projeto haja um arquivo `.babelrc`, é válido também.  
Pessoalmente não tive uma boa experiência criando os dois, não consegui rodar os testes e a aplicação corretamente.

```js
module.exports = function babelConfig({ cache, env }) {
  cache.invalidate(() => process.env.NODE_ENV);

  const isCypress = process.env.CYPRESS_ENV === "true";

  const presets = [
    [
      "next/babel",
      {
        "preset-env": {
          modules: env("test") ? "commonjs" : "auto",
        },
      },
    ],
  ];

  const plugins = [
    [
      "module-resolver",
      {
        alias: {
          styles: "./styles",
          containers: "./src/containers",
          public: "./public",
        },
      },
    ],
    [
      "styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
    ["inline-react-svg"],
  ];

  if (isCypress) {
    plugins.push("istanbul");
  }

  return { presets, plugins };
};
```

## Criando o arquivo cypress.config.js

A seguir você verá o arquivo `cypress.config.js` que deverá ficar na pasta raíz do seu projeto.

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/integration/containers/**/*",
    chromeWebSecurity: false,
    pageLoadTimeout: 70000,
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
    video: false,
  },
  env: {
    cypress: true,
  },
});
```

## Criando a pasta cypress e mais arquivos de configuração

1. Crie a pasta `cypress` na raíz do seu projeto;
2. Dentro dela crie as seguintes pastas: `integration`, `plugins`, `support`;

### Pasta integration

Dentro desta pasta criei um diretório chamado `containers` e coloquei meus testes dentro: `admin.spec.js`, `sales.spec.js` e, assim por diante.

Exemplo de teste:

```js
describe("Admin page", () => {
  it("Should check if promotional banner is visible", () => {
    cy.visit("/");
    cy.contains("Promoção relâmpago");
    cy.getByDataTestId("banner-promotional").should("exist");
  });
});
```

### Pasta plugins

É necessário criar um arquivo `index.js` com o seguinte código:

```js
module.exports = (on, config) => {
  require("@cypress/code-coverage/task")(on, config);

  on(
    "file:preprocessor",
    require("@cypress/code-coverage/use-browserify-istanbul"),
  );

  // important - return config because code coverage plugin
  // modifies environment variables there
  return config;
};
```

### Pasta support

Vamos criar três arquivos.

`e2e.js`

```js
import "@cypress/code-coverage/support";

import "./commands";
```

`index.js`

```js
import "@cypress/code-coverage/support";

after(() => {
  cy.task("coverageReport");
});
```

`commands.js`

```js
import "cypress-wait-until";

Cypress.Commands.add("getByDataTestId", (selector, ...args) => {
  cy.get(`[data-testid=${selector}]`, ...args);
});

Cypress.on("uncaught:exception", () => false);
```

## Conclusão

Por último mas não menos importante, pode ser que você tenha que adicionar nos seus arquivos `.gitignore`, `.eslintignore` (se você usa `eslint`) e `jest.config.js` (no parâmetro `coveragePathIgnorePatterns`) as pastas geradas nesse processo para serem ignoradas.

Espero que seu processo seja mais simples do que foi o meu :)
