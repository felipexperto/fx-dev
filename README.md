
# FX Dev

Um blog pessoal para disseminar conteúdo. 


## Sobre o projeto

Este projeto foi idealizado de diversas maneiras, tanto em layout quanto em tecnologia.

Depois de grande tempo em dúvida do propósito deste projeto estabeleci as seguintes diretrizes:

- É um blog para documentar soluções importantes para mim e que possam ser úteis para outras pessoas, portanto, o conteúdo é o mais importante;
- Suas páginas devem ser leves, carregamento rápido e um bom ranqueamento no Web Vitals;
- A interface deve ser simples e acessível, assim como o código;
- É utilizado o Netlify gratuito que tem quotas de tempo de build e tráfego de dados, logo:
  - Poucas imagens;
  - Pouco Javascript;
  - Sem animações;
  - O mínimo de scripts de terceiros possível;
- Seguir a prática de [10-minute build](https://www.jamesshore.com/v2/books/aoad1/ten_minute_build); 


## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:felipexperto/fx-dev.git
```

Entre no diretório do projeto

```bash
  cd fx-dev
```

Selecione a versão correta do Node

```bash
  nvm use
```

Instale as dependências

```bash
  pnpm install
```

Inicie o servidor

```bash
  pnpm astro dev
```

## Rodando localmente com Docker

Clone o projeto

```bash
  git clone git@github.com:felipexperto/fx-dev.git
```

Entre no diretório do projeto

```bash
  cd fx-dev
```

Faça build do projeto

```bash
  docker build -t {{nome-da-imagem}} .
```

Rode o container

```bash
  docker run -it -p 4321:4321 {{nome-da-imagem}}
```


## Deploy

É gerado um build de _preview_ automaticamente pela Netlify a cada commit pusheado em qualquer branch. Para realizar deploy em produção basta selecionar o deploy desejado. Tudo é controlado por meio do painel na Netlify.

## Stack utilizada

- [AstroJS](https://astro.build/);
- [FuseJS](https://www.fusejs.io/);
- [TailwindCSS](https://tailwindcss.com/);
