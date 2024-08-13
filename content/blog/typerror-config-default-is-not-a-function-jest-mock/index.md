---
authorid: 1
category: Dev
tags:
  - blog/category/dev
title: "TypeError: (0 , _config.default) is not a function no Jest"
date: "2024-08-13T13:00:00.284Z"
description: "Como resolver o problema de TypeError ao fazer mock no Jest"
---

## O problema

Na tentativa de mockar o método `getConfig` do `next/config` recebi o seguinte erro:

```markup
TypeError: (0 , _config.default) is not a function
```

Repare que o `TypeError` fala que não encontrou um método `default`.

Nesse momento eu estava utilizando o seguinte mock:

```js
jest.mock('next/config', () => ({
  ...jest.requireActual('next/config'),
  getConfig: () => ({
    publicRuntimeConfig: {
        enabled: 'true',
        siteKey: 'xablau',
    }
  })
}));
```

O problema foi resolvido quando alterei o mock para:

```js
jest.mock('next/config', () => ({
  __esModule: true,
  default: () => ({
    publicRuntimeConfig: {
      recaptcha: {
        enabled: 'true',
        siteKey: 'xablau',
      },
    },
  }),
}));
```

## Dependências e versões

```markup
"next": "^12.3.4",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"@testing-library/jest-dom": "^6.1.3",
"@testing-library/react": "^14.0.0",
"jest": "^26.0.1",
```