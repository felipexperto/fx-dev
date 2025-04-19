---
authorid: 1
category: Dev
tags:
  - blog/category/dev
title: "Testando componente lazy load React Suspense com Jest, React Testing Library e Typescript"
date: "2022-06-03T22:40:00.000Z"
description: "Testando componente lazy load React Suspense com Jest, React Testing Library e Typescript"
tldr: ""
---

Já se deparou com o erro abaixo?

```
console.error
    Warning: A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

    When testing, code that resolves suspended data should be wrapped into act(...):

    act(() => {
      /* finish loading suspended data */
    });
    /* assert on the output */

    This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act

...

TestingLibraryElementError: Unable to find an element by: [data-testid="error"]
```

Bem genérico, certo? Mas se você estiver utilizando `Lazy` e `Suspense` para carregar seus componentes, talvez os próximos exemplos sejam úteis.

## Tecnologias e versões

```
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.3.0",
    "styled-components": "^5.3.5",
  },
  "devDependencies": {
	"@testing-library/jest-dom": "^5.16.4",
	"@testing-library/react": "^13.1.1",
	"@testing-library/react-hooks": "^8.0.0",
	"@testing-library/user-event": "^14.1.1",
	"jest": "27.5.1",
	"ts-jest": "^27.1.4",
	"typescript": "^4.6.3",
  }
```

## Os Componentes

### Home

```
import * as S from './style';

const Error = () => {
  return (
    <S.Container data-testid="home">
      <S.Content>
        <p>Home</p>
      </S.Content>
    </S.Container>
  );
};

export default Error;
```

### Error

```
import * as S from './style';

const Error = () => {
  return (
    <S.Container data-testid="error">
      <S.Content>
        <p>Essa página não foi encontrada</p>
      </S.Content>
    </S.Container>
  );
};

export default Error;
```

### App

```
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from 'components';
import * as S from './style';

const Home = lazy(() => import('containers/Home'));
const Error = lazy(() => import('containers/Error'));

const App = () => {
  return (
    <S.Container data-testid="app">
      <Routes>
        <Route path="/error" element={<Error />} />
        <Route
          path="/home"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </S.Container>
  );
};

export default App;
```

## O teste

```
import { render, waitFor } from 'commons/utils/test';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import App from './';

describe('[Containers] App', () => {
  interface ISetup {
    url: string;
  }

  const setup = async ({ url }: ISetup) => {
    const history = createMemoryHistory();

    history.push(url);

    const utils = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    );
    return {
      ...utils,
    };
  };

  test('should render Error page', async () => {
    const { getByTestId } = await setup({ url: '/xablau' });
    await waitFor(() => expect(getByTestId('error')).toBeInTheDocument());
  });
});
```
