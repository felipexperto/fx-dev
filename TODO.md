**Redesign**

chore: alterar layout dos cards no post list
  [x] criar componente PostCard;
  [x] conferir acessibilidade nestes componentes
  [x] versão desktop
  [x] verificar se o hook por tamanho da tela ainda existe e deletá-lo

chore: improve a11y
  [ ] adicionar lint de a11y `jsx-a11y`
  [ ] ver a proposta de `react-a11y`
  [ ] ver a proposta de `react-axe`
  [ ] adicionar a dependência e configurar
  [ ] adicionar o plugin de acessibilidade `storybook-addon-a11y`

chore: customizar o TL;DR; nos posts
  [ ] consultar layout de quotes do Obsidian

refactor: ajeitar media queries para uma utilização melhor
  [x] Pegar valor vindo do theme sem importar o theme;
  [ ] Criar um helper para pegar multiplos breakpoints;

feat: implementar filtro da lista de posts por categoria

[x] refactor: reescrever projeto em Typescript e remover propTypes

chore: adicionar script de gerar componentes

**Features**

- Adicionar seção com tecnologias que utilizo;
 - [Exemplo 01](https://preview.themeforest.net/item/arter-cv-resume-portfolio-web-app-template/full_screen_preview/27008333?_ga=2.216075988.370116323.1607660090-1265588602.1607660075), [Exemplo 02](https://preview.themeforest.net/item/oblas-angular-portfolio-web-application/full_screen_preview/23654405?_ga=2.172633248.2001170672.1607660092-1265588602.1607660075)

- Infinity Loading on scroll de posts na home ou paginação quando houverem +50 posts;

- Custom 404 page;


**Backlog Técnico**

- Testes unitários e de integração;

**Pesquisa**

- Estudar como desenvolver uma busca;
  - Resultados em nova página?
  - Vai aceitar parâmetros na url?
  - Estudar a implementação de busca no sticky header;

- É possível montar uma página de currículo utilizando APIs do LinkedIn?

**Atualizar o layout**

- https://mainline-astro-template.vercel.app/
- https://docs.astro.build/en/guides/styling/#markdown-styling
- Adicionar o shadcn? https://ui.shadcn.com/docs/components/carousel