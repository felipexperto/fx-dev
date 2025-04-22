---
authorid: 1
category: Dev
tags:
  - blog/category/dev
title: "Mockando window.location usando Jest + React Testing Library + Typescript"
date: "2022-06-03T22:05:00.000Z"
description: "Exemplo prático de como mockar o objeto window.location usando Jest + React Testing Library + Typescript"
tldr: ""
---

As tecnologias vão evoluindo as `breaking changes` vão aparecendo e enfim, se você chegou até aqui provavelmente tentou algumas abordagens para mockar o objeto `window.location` que no passado funcionaram mas não funcionam mais. Então, sem enrolação, vamos à prática.

## Tecnologias e versões

```
"@testing-library/jest-dom": "^5.16.4",
"@testing-library/react": "^13.1.1",
"@testing-library/react-hooks": "^8.0.0",
"@testing-library/user-event": "^14.1.1",
"jest": "27.5.1",
"ts-jest": "^27.1.4",
"typescript": "^4.6.3",
```

## Função de exemplo

```
export const externalRedirect = (url: string) => {
  return window.location.assign(url);
};
```

## Teste

```
import { externalRedirect } from './';

test('it calls assign with expected URL', () => {
  const url = 'http://example.com';
  global.window = Object.create(window);
  Object.defineProperty(window, 'location', {
    value: { assign: jest.fn() },
  });
  externalRedirect(url);
  expect(window.location.assign).toHaveBeenCalledTimes(1);
  expect(window.location.assign).toHaveBeenCalledWith(url);
});
```
