---
authorid: 1
category: Dev
title: "Google Tag Manager - Parte 1: O que é e como instalar"
date: "2021-02-10T10:07:00.284Z"
description: "Google Tag Manager: O que é, como instalar, criando uma conta, lidando com ambientes diferentes, React, Single Page Applications e mais."
tldr: "Este artigo não tem resumo, se você encontra-se num estado de cansaço, volte mais tarde :)"
---

## GTM: O que é?

O GTM (Google Tag Manager) é um gerenciador de tags, que abre um contêiner dentro do site e através dele conseguimos injetar códigos de tags terceiras e gerenciar todos esses scripts de código em um único lugar.

Em outras palavras, é uma ferramenta que age como um intermediário entre seu site e ferramentas de terceiros (Google Analytics, Hotjar, Facebook Pixel, etc). Você pode concentrar todos os scripts nele e escolher quando dispará-los.

É de grande auxílio para profissionais de marketing que tem necessidade de adicionar e remover tags de remarketing, mensurar promoções de campanhas e gerar relatórios pois após a inserção do GTM tudo pode ser realizado por meio de um `Dashboard` (Painel de Controle) sem auxílio de pessoas desenvolvedoras.

Essa solução pode ser dispensável para sites pequenos como blogs pessoais que não necessitam de tags de parceiros ou remarketing, que não envolvam monetização ou venda de produtos, que já possuam relatórios de acessos básicos (como Wordpress, WIX e similares) pois exige certo esforço por possuir uma curva de aprendizado e certa complexidade.

## O que é aconselhável saber para começar a mexer com o GTM?

Na minha opinião, desconsiderando a parte de implementação, seria suficiente:

- O básico de Javascript para funções customizadas: [Learn JavaScript - Full Course for Beginners](https://www.youtube.com/watch?v=PkZNo7MFNFg)
- Uma pitada de CSS e seletores: [#GTMTips: 10 Useful CSS Selectors](https://www.simoahava.com/gtm-tips/10-useful-css-selectors/) e [CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp)
- E um pouco de Google Analytics: [Google Analytics para iniciantes](https://analytics.google.com/analytics/academy/course/6)

## Como criar uma conta do Google Tag Manager?

Você pode acessar o serviço pela url: [https://tagmanager.google.com/](https://tagmanager.google.com/) com sua conta do Google;  
Depois é possível criar uma conta. Por exemplo, se você tem um site próprio, a conta seria do seu site; se você trabalha de freelancer, teria provavelmente o nome da empresa que você presta serviços.

## Como instalar o GTM no meu site?

Para que o GTM funcione em seu site é necessário adicionar um bloco de código Javascript em seu site que será automaticamente disparado no momento do carregamento da página. Esse bloco de código é exibido para você assim que criar um `container` ou acessando a opção `Administrador > Instalar o Gerenciador de tags do Google`.

Você pode seguir as orientações [conforme diz a documentação](https://support.google.com/tagmanager/answer/6103696?hl=pt-BR) e, além disso tenho esse vídeo para recomendar: [Google Tag Manager: O que é e como instalar?](https://www.youtube.com/watch?v=7y0uSS2TQQI) e este post [How to Setup and Install Google Tag Manager on your Website](https://www.analyticsmania.com/post/how-to-install-google-tag-manager/).

Numa Single Page Application é um pouco diferente, imagine que você terá o GTM para os ambientes de PROD e QA, se você utilizou o `create-react-app` que possui Webpack ou configurou uma aplicação com Webpack e tem à disposição o [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) é possível [criar variáveis](https://stackoverflow.com/questions/49375867/how-do-you-reference-a-process-env-variable-in-html-script-src-react) nos arquivos `.env.production` e `.env.staging` (pasta raíz do seu projeto) e utilizá-las com `%%`, assim:

```javascript
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',%REACT_APP_GTM_ID%);</script>
<!-- End Google Tag Manager -->
```

### E aqui nós temos as seguintes preocupações:

1. E se o seu caso for diferente do citado acima? Se você estiver utilizando alguma outra ferramenta de build, como o [esbuild](https://github.com/evanw/esbuild) ou utilizando uma ferramenta com Server-side rendering, como o NextJS, por exemplo.
2. Mesmo sendo seu caso e você tendo conseguido inserir o código com a ajuda do Webpack, o que você fará quando a rota mudar e perceber que o evento de visualização de página não foi disparado?
3. Por fim, e se eu te dissesse que seus testes unitários com `react-scripts test` podem quebrar por causa dessa implementação?

A primeira opção que encontrei está neste artigo chamado [Integrating Google Tag Manager with a React App](https://medium.com/finnovate-io/integrating-google-tag-manager-with-a-react-app-5a8584ee2251) onde o autor utiliza o pacote [react-gtm-module](https://github.com/alinemorelli/react-gtm) e condiz com a estratégia dos especialistas do AnalyticsMania neste post: [How To Track Single Page Web App with Google Tag Manager](https://www.analyticsmania.com/post/single-page-web-app-with-google-tag-manager/). Francamente, **essa solução não foi testada** pois o objetivo não era adicionar mais uma dependência no projeto.

### Então como procedemos na história?

1. Criação da pasta `/src/config` e um arquivo `index.js` [contendo este código](https://gist.github.com/felipexperto/9f778a355a4580fe46aebfd8eed93600) para expor as variáveis de ambiente dos arquivos `.env`s;
2. Criação da pasta `/src/utils/gtm` e um arquivo `index.js` [contendo este código](https://gist.github.com/felipexperto/7f5e362ed04ec43c28a2d0995175172a). Repare que importamos o arquivo `config` e passamos o ID do GTM com `config.REACT_APP_GTM_ID`;
3. E efetuamos a chamada dentro do componente `Root` da aplicação com useEffect:

```jsx
import React, { useEffect } from "react";
import gtm from "utils/gtm";

const Root = ({ children }) => {
  useEffect(() => {
    gtm();
  }, []);

  return <div>Seu conteúdo está aqui</div>;
};
```

### Isso ainda não resolveu o caso dos testes unitários, certo? Então, vamos:

1. Perceba que no gist dos `.env`s nós temos `REACT_APP_SELF_ENV`, isso serve como um `NODE_ENV` que nós podemos sobrepor. Sendo assim, vamos passá-la no `package.json` para nosso comando de teste: `"test": "REACT_APP_SELF_ENV=test react-scripts test"`;
2. Agora crie um arquivo de helper de sua preferência com a função: `export const isTestEnv = () => config.REACT_APP_SELF_ENV === 'test';`
3. Vamos importar seu helper no arquivo do componente `Root` e editar o `useEffect`:

```jsx
import React, { useEffect } from "react";
import gtm from "utils/gtm";
import { isTestEnv } from "utils/helpers"; // meu helper

const Root = ({ children }) => {
  useEffect(() => {
    if (!isTestEnv) {
      gtm();
    }
  }, []);

  return <div>Seu conteúdo está aqui</div>;
};
```

### E como você alternará os IDs de GTM agora?

Passando a variável de ambiente nos seus comandos do `package.json`, por exemplo:

```javascript
"build:qa": "REACT_APP_SELF_ENV=staging npm run build",
"build:production": "REACT_APP_SELF_ENV=production npm run build",
```

### E a troca de rotas que não dispara o pageview?

Se você está utilizando `create-react-app` provavelmente também está usando `react-router-dom` e `react-helmet`, neste caso, podemos utilizar o hook `useLocation()` e disparar um evento personalizado com dataLayer.

Deixei o código de [exemplo disponível aqui](https://github.com/felipexperto/gtm_cra) e para saber mais sobre como criar este evento que nomeei de `virtualPageView` no GTM, visite o post: [Google Tag Manager - Parte 3: Criar um evento personalizado de dataLayer](/gtm-parte-3-criando-evento-personalizado-datalayer-push) na seção `virtualPageView`.

Se você está indo de `NextJS`, procure por [router.events](https://nextjs.org/docs/api-reference/next/router#routerevents), mais especificadamente `routeChangeComplete`, toda vez que a rota mudar, este gatilho é disparado e, é nesse momento que você deverá disparar um evento personalizado de dataLayer.

E se você está com `Gatsby`, pode levantar as mãos para o céu, pois ele tem plugins pra resolver esse tipo de problema: [gatsby-plugin-google-tagmanager](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/) e [gatsby-plugin-google-analytics](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/). Você vai instalar os dois seguindo as instruções, no caso do GTM, [serão dadas instruções](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/#tracking-routes) para você configurar uma `TAG` no próprio Google Tag Manager e adicionar o parâmetro `routeChangeEventName` como `options` no `gatsby-plugin-google-tagmanager` pois o Gatsby disparará na mudança de rota esse evento.

Caso tenha problemas com o objeto `window`, pode editar o arquivo `gatsby-config.js`;

```javascript
const windowGlobal = typeof window !== 'undefined' && window;

{
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: 'GTM-XXXXXX',
      defaultDataLayer: {
        pageType: windowGlobal.pageType,
        routeChangeEventName: "virtualPageView",
      },
    },
  },
```

## Agradecimentos

- Um agradecimento à [Ana Paula Maluf](https://www.linkedin.com/in/anapmaluf/), Estrategista de Marketing Digital e Digital Analytics, que deu todo suporte e incentivo no começo desta jornada com GTM;
- E boa parte desse caminho foi trilhado em conjunto ou desbravado por [Emanoel Lopes](https://www.linkedin.com/in/emanoel-lopes-64100839) e, [ele também tem um blog](https://emanoellopes.me/) :)
