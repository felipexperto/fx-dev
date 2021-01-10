# **FX DEV**

## **O que é o Projeto?**

Um blog pessoal para disseminar conteúdo e também um laboratório.  
Foi criado em [Gatsby](https://www.gatsbyjs.com/) utilizando Markdown e com base (_boilerplate_) em um template de Kyle Mathews.

## **Rodando a aplicação**

- Clone o repositório do projeto;
- Sempre que alternar entre as versões com e sem Docker, apague a pasta `node_modules`.

### **Com Docker**

#### **Dependências**

Para o ambiente de desenvolvimento e testes você vai precisar de:

- [Docker](https://www.docker.com/);
#### **Passo a passo**

1. Crie a imagem base para o projeto:
    - `docker-compose build` ou
    - `docker-compose build --no-cache` (alternativa sem utilizar cache)

2. Execute o projeto:
    - `docker-compose up` (pode levar algum tempo na etapa de `Linking Dependencies`)

3. Utilize a url (sem porta) para ver a aplicação rodando:
    - `http://localhost`

4. Para encerrar a execução:
    - `Ctrl+C` no terminal
    - `docker-compose down`

### **Sem Docker**

#### **Dependências**

Para o ambiente de desenvolvimento e testes você vai precisar de:

- [Python](https://www.python.org/);
- [Node](https://nodejs.org/pt-br/);
- [NVM - Node Version Module](https://github.com/nvm-sh/nvm) (opcional);
- [Yarn](https://yarnpkg.com/).

Para saber se você possui as três dependências instaladas basta rodar o comando abaixo e deve receber os números das versões:

```bash
python --version && node -v && yarn -v
```

#### **Passo a passo**

1. Instale as dependências do projeto:
    - `yarn install`

2. Execute o projeto:
    - `yarn start`

3. Utilize a url:
    - `http://localhost:8000`

4. Para encerrar a execução:
    - `Ctrl+C` no terminal


# 🤔 Troubleshooting

## ENOENT

`Error: ENOENT: no such file or directory, stat '/app/public/404.html'`

Se você rodou o comando: `docker-compose -f docker-compose.deploy.yml up` e ocorreu o erro acima,  faça o build da imagem de deploy:

- `docker-compose -f docker-compose.deploy.yml build`

## nginx

```
nginx_1  | 2020/04/08 14:17:18 [emerg] 1#1: host not found in upstream "app" in /etc/nginx/conf.d/default.conf:6
nginx_1  | nginx: [emerg] host not found in upstream "app" in /etc/nginx/conf.d/default.conf:6
dicaprio_nginx_1 exited with code 1
```

Se você rodou o comando: `docker-compose up`, está tentando executar o ambiente de desenvolvimento e ocorreu o erro acima, refaça o build:

- `docker-compose build`

## node_modules

```
There was a problem loading the local develop command. Gatsby may not be installed in your site's "node_modules" directory. Perhaps you need to run "npm install"? You might need to delete your "package-lock.json" as well.
```

Se você rodou o comando: `docker-compose up` e ocorreu o erro acima, refaça o build conforme descrito em `Rodando a aplicação > Com Docker`

## Localhost fica carregando com tela em branco

Se você recebeu a mensagem `success Building development bundle` e não tem resposta da aplicação:

- Pare todos os containers do docker
    - `docker-compose down --remove-orphans`

- Apague sua pasta node_modules
    - `rm -rf node_modules`

- No terminal liste suas imagens do Docker
    - `docker images`

- Observe as datas na coluna `CREATED`
    - Ex: `30 minutes ago`, `1 hour ago`, `2 hours ago`

- Utilizando a `IMAGE ID` apague as mais recentes que sejam relacionadas ao `FX DEV`, tagueadas ( `fx-dev` ) ou não ( `<none>` )
    - Ex: `docker rmi -f d016f8a6b748 69d12795e647 66f5e68079ab`

- Faça o build de uma nova imagem de desenvolvimento
    - `docker-compose build --no-cache`

- Siga a partir da etapa 2 do tópico `Rodando a aplicação > Com Docker`

- Dê preferência à utilização da janela de **Visitante** do seu navegador. Ela não conterá cache ou cookies de execuções anteriores.

## Não consigo executar comandos com `npm` ou `yarn`

Se você precisa rodar scripts com `npm` ou `yarn`, tais como: instalar, atualizar ou adicionar dependências, lint e semelhantes, sempre rode-os dentro do container:

- `docker-compose run --rm app <comando no container>`
    - Ex.: `docker-compose run --rm app yarn install`
    - Ex.: `docker-compose run --rm app yarn add <nome-do-pacote>`
    - Ex.: `docker-compose run --rm app yarn lint`


# Documentação Padrão do Gatsby

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the blog starter.

    ```shell
    # create a new Gatsby site using the blog starter
    gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-blog-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-blog-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-blog)

<!-- AUTO-GENERATED-CONTENT:END -->
