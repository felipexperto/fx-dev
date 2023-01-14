---
authorid: 1
category: Dev
tags:
  - blog/category/dev
title: "useScrollLock hook com testes de unidade"
date: "2023-01-14T00:00:00.000Z"
description: "useScrollLock hook com testes de unidade"
---

A ideia desse post é apresentar de maneira sucinta o código, testes de unidade e utilização de um custom hook chamado `useScrollLock`.

Esse hook que aplica um `overflow: hidden` no `<body>` pode ser útil para bloquear a rolagem na abertura de sidebars e modais.


## Tecnologias e versões

```
"@testing-library/jest-dom": "^5.10.1",
"@testing-library/react": "^10.2.1",
"@testing-library/react-hooks": "^3.3.0",
"@testing-library/user-event": "^13.2.1",
"jest": "26.0.1",
```

## useScrollLock

`useScrollLock/index.js`
```js
import React from 'react';

export const useScrollLock = () => {
  const lockScroll = React.useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = 'visible';
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};
```

## Teste

`useScrollLock/useScrollLock.test.js`
```js
import { renderHook } from '@testing-library/react-hooks';
import { useScrollLock } from './index';

describe('[Hook] useScrollLock', () => {
  test('should remove scroll from body', () => {
    const body = window.document.body;
    const { result } = renderHook(() => useScrollLock());
    const lockScroll = result.current.lockScroll;

    body.style.overflow = 'visible';

    expect(body).toHaveStyle('overflow: visible');
    lockScroll();
    expect(body).toHaveStyle('overflow: hidden');
  });

  test('should add scroll to body', () => {
    const body = window.document.body;
    const { result } = renderHook(() => useScrollLock());
    const unlockScroll = result.current.unlockScroll;

    body.style.overflow = 'hidden';

    expect(body).toHaveStyle('overflow: hidden');
    unlockScroll();
    expect(body).toHaveStyle('overflow: visible');
  });
});
```

## Utilização do hook

```js
import React from 'react';
import { useScrollLock } from 'hooks/useScrollLock';


const DumbComponent = () => {
  const { lockScroll, unlockScroll } = useScrollLock();

  return (
    <>
      <button onClick={() => lockScroll()} type="button">Lock Scroll</button><br />
      <button onClick={() => unlockScroll()} type="button">Unlock Scroll</button>
    </>
  )
};
```

## Bônus

[Exemplo no Codesandbox](https://codesandbox.io/s/usescrolllock-y57ord?file=/src/App.js) com React 18 e dependências mais atuais.
