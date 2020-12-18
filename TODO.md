**Features**

- Adicionar plugin Disqus de comentários
 - https://www.gatsbyjs.org/docs/adding-comments/

- Adicionar seção com tecnologias que utilizo;
 - [Exemplo 01](https://preview.themeforest.net/item/arter-cv-resume-portfolio-web-app-template/full_screen_preview/27008333?_ga=2.216075988.370116323.1607660090-1265588602.1607660075), [Exemplo 02](https://preview.themeforest.net/item/oblas-angular-portfolio-web-application/full_screen_preview/23654405?_ga=2.172633248.2001170672.1607660092-1265588602.1607660075)

- Infinity Loading on scroll de posts na home ou paginação quando houverem +50 posts;

- Tema dark;

- Custom 404 page;


**Backlog Técnico**


- Passar tema corretamente para context;
  - Criar ThemeProvider
  ```
  import { ThemeProvider } from 'styled-components';
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
  ```

- Configurar regras adicionais no Eslint;

- Troca de fontes e cores por variáveis de tema;

- Husky com pre-commits;

- Testes unitários e de integração;

- Editar a descrição do repositório;

- Editar o README:
  - Aplicação não dockerizada;
  - python --version
  - node -v
  - npm install --global gatsby-cli
  - npm install
  - gatsby develop
  - https://www.gatsbyjs.org/docs/gatsby-on-windows/


**Pesquisa**

- Estudar possibilidade de adicionar categorias e/ou tags por post;
  - Estudar a possibilidade de relacionar categorias e/ou tags;

- Estudar como desenvolver uma busca;
  - Resultados em nova página?
  - Resultados na home, filtrados?
  - Vai aceitar parâmetros na url?
  - Como vai ser este componente de busca?
  - Onde ele vai ficar? Meio da página, tipo Google? Topo fixo?
  - Filtro somente por texto ou por categoria também?
  - Estudar a implementação de busca no sticky header;


**Conteúdo**

- Adicionar feature image na lista de posts e dentro dos artigos;
 - É uma decisão correta considerando que há um limite de tráfego de banda?