---
authorid: 1
category: Dev
title: Iniciando com regex no Javascript
date: "2021-11-10T23:00:00.000Z"
description: ""
tldr: ""
---

Logo de cara, vamos combinar uma coisa, pode ser? Que `regex` não é algo trivial ou intuitivo. Entendo que todo código tem seu contexto e à décadas atrás provavelmente não decidiram complicar a vida de milhares de pessoas que desenvolvem a troco de nada. No entanto, seja utilizado em Javascript ou não, é um pé no...

Enfim, passado o desabafo, temos que aprender a lidar com `expressões regulares` pois são necessárias e podem nos ajudar no dia a dia. Vai doer mas tá tudo bem.

Meu objetivo com as próximas linhas é trazer uma breve explicação e casos onde você tenha que vir a utilizar ou possa aplicar para facilitar sua vida. Bora!

## Quais são as partes de uma regex?

Uma expressão regular é formada de duas partes: `/padrão/modificadores`.

- O `padrão` ( ou `pattern` ) é o trecho que será procurado dentro da string que for passada;
- Os `modificadores` ( ou `flags` ) são opcionais e vão definir algumas regras, vamos ver como isso funciona?

## Como criar uma regex em Javascript

Você pode criar uma expressão regular de dois modos, utilizando `notação literal` ou o método construtor `new RegExp`.  
Veja os exemplos abaixo para procurar por `abc` em minúsculas (lembre-se que expressões regulares são `case-sensitive`):

```js
const re = /abc/; // notação literal
const re = new RegExp("abc"); // método construtor
```

Normalmente minha escolha é notação literal, no entanto, como existem pequenas diferenças (e você deve saber) vou deixar como indicação de leitura esse link da MDN que explica tudo bonitinho: **[RegExp](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp#descri%C3%A7%C3%A3o)**.

Repare que não utilizamos modificadores até agora, o mesmo exemplo acima com modificadores poderia ser:

```js
const re = /Abc/i; // notação literal
const re = new RegExp("Abc", "i"); // método construtor
```

E o que mudou? Troquei o `a` minúsculo por maiúsculo e adicionei a flag `i`.  
Agora esta busca é `case-insensitive`, ou seja, não leva em consideração maiúsculas e minúsculas. Isso quer dizer que ao aplicar este regex todas as seguintes strings retornariam verdadeiro: `abc`, `Abc`, `ABc`, `AbC`, `ABC`, `aBc`, `aBC`, `abC`, `abc`.

No momento de escrita deste post existem 3 modificadores/flags que podem ser utilizados:

- `i` - Desconsidera maiúsculas e minúsculas (case-insensitive).
- `g` - Global Match – procura todas as ocorrências da expressão no texto, ao invés de parar na primeira ocorrência.
- `m` - Procura por ocorrências em múltiplas linhas.

Agora que você aprendeu a criar uma regex vamos finalmente aplicá-la?

## Como aplicar uma regex em Javascript

Existem alguns métodos (funções) que permitem a aplicação de regex, são eles:

- `exec`: Executa uma pesquisa por uma correspondência em uma string e retorna um array de informações.
- `test`: Testa uma correspondência em uma string e retorna true ou false.
- `match`: Executa uma pesquisa por uma correspondência em uma string e retorna uma array de informações ou null caso não haja uma correspondência.
- `search`: Testa uma correspondência em uma string e retorna o indice da correspondência ou -1 se o teste falhar.
- `replace`: Executa uma pesquisa por uma correspondência em uma string, e substitui a substring correspondente por uma substring de substituição.
- `split`: Usa uma expressão regular ou uma string fixa para quebrar uma string dentro de um array de substrings.

Vamos aos testes: 👀

```js
const re = /cachorros/gi; // regex muito loouco
const text =
  "Cachorros são lindos, aliás, tenho dois e ambos são cachorros adotados."; // esse é nosso texto

re.exec(text);
// Retorno: Apesar da flag 'g' retornou somente a primeira ocorrência.
// [
//   0: "cachorro"
//   groups: undefined
//   index: 52
//   input: "Cachorros são lindos, aliás, tenho dois e ambos são cachorros adotados."
//   length: 1
// ]

re.test(text); // true
text.match(re); // ['Cachorros', 'cachorros']
text.search(re); // 0
text.replace(re, "gato"); // 'gatos são lindos, aliás, tenho dois e ambos são gatos adotados.'
text.split(re); // ['', ' são lindos, aliás, tenho dois e ambos são ', ' adotados.']
```

## Checar se texto existe dentro de uma string em qualquer posição

Essa é fácil, fizemos inclusive em um dos exemplos anteriores. Vamos lá, novamente:

```js
const str = "JavaScript é loko";
const regex = /loko/;
regex.test(str); // true
```

E tem mais uma coisa que podemos fazer com ele...

## Checar se um cookie existe e seu valor é válido

Ao invés de pegar o cookie, dar um `split` na string, encontrar um dos itens que comece com a key que você deseja e pegar o valor, podemos utilizar o `match`, vejamos:

```js
// ao invés disso:
const getCookieValue = document.cookie
  .split("; ")
  .find((row) => row.startsWith("test2="))
  .split("=")[1];

if (getCookieValue === "1") {
  // ...
}

// podemos fazer isso:
const hasValidCookie = document.cookie.match(/test2=1/);
if (hasValidCookie) {
  // ...
}
```

## Selecionar um elemento com React Testing Library utilizando getByText

```jsx
it('Should render correctly on route: /users/nikita', async () => {
  const { getByText } = render(<UserInfo />);
  const element = getByText(/Eu sou um texto!/i));
});
```

## Checar número de incidências de uma substring dentro de uma string

Vamos utilizar o método `match` em conjunto com `length` e encadeamento opcional `?.` ( optional chaining ) para quando nenhum resultado for encontrado recebermos `undefined` ao invés do erro `Cannot read properties of null (reading 'length')`.

```js
const teste = "AAAAA Javascript BBBBB Java Javascripte CCCCC Javascript";
teste.match(/Javascript/g)?.length; // 3
```

## Substituir caracter dentro de uma string

```js
const str = "Javascript é loko";
const regex = /loko/;
str.replace(regex, "chavoso"); // "Javascript é chavoso"
```

## Remover tags HTML de uma string

Digamos que você tenha um campo num formulário e queira zelar pela segurança removendo possíveis tags HTML que possam ser cadastradas antes de enviar o conteúdo para o backend.

```js
const textoHtml =
  '<div class="classe-teste" data-testid="div-aleatoria"><strong>Texto</strong></div>';
textoHtml.replace(/<[^>]*>?/gm, ""); // 'Texto'
```

## Fazer um redirect de urls

Essa é uma situação bem comum, alguém solicitou a desativação de páginas e você precisa direcionar o tráfego para não ter o site punido pelo Google. Afinal, os links estão por aí, em outros sites ou favoritados pelos usuários.

Digamos que estejamos num e-commerce de roupas e não venderemos mais `shorts`. Esses shorts estão cadastrados em várias categorias e a partir de agora sempre que alguém acessar um link com essa palavra, deve direcionar para a `categoria` do produto.

Faz muito sentido? Não e isso não vem ao caso 😂

As possíveis urls são:

- `https://sualoja.com.br/c/esporte-e-lazer/p/fit-shorts-fitness`
- `https://sualoja.com.br/c/moda-feminina/p/shorts-jeans`
- `https://sualoja.com.br/c/moda-masculina/p/shorts-masculino-tactel-verao`
- `https://sualoja.com.br/c/moda-masculina/p/nao-pode-pegar-esta-url`

Você pode fazer o teste utilizando o site [regex101.com](https://regex101.com/), colocando no campo `Test String` todas as urls e o nosso regex escolhido foi: `(.*)\/p\/(.*shorts.*)`

Com ele você terá o primeiro grupo de captura (entre parênteses) contendo o conteúdo antes do `/p/`, o segundo grupo sendo a palavra `shorts` em qualquer posição pois o conjunto de caracteres `.*` significa qualquer caracter (`.`) em qualquer quantidade (`*`).

Em outras palavras, ele reconhecerá a palavra `shorts` nas três primeiras urls e utilizando a sintaxe `$1` você conseguirá extrair a parte da url que te leva para a categoria.

## Conclusão

Este post já está muito extenso, então vou ficando por aqui e deixo alguns cenários onde regex também é útil:

- Criar um input que só permite números;
- Validar campo de e-mail;
- Validar formato de data;
- Validar campo de telefone;

👋

## Referências

- [5 Useful JavaScript Regex Methods Every Developer Must Know](https://javascript.plainenglish.io/5-useful-javascript-regex-methods-every-developer-must-know-20ebb5993c8)
- [Strip HTML from Text JavaScript](https://stackoverflow.com/questions/822452/strip-html-from-text-javascript)
- [4 Practical Use Cases for Regular Expressions](https://blog.bitsrc.io/4-practical-use-cases-for-regular-expressions-b6ab140894fd)
- [Extremely useful Regular Expression examples for real world applications](https://levelup.gitconnected.com/extremely-useful-regular-expression-examples-for-real-world-applications-567e844a0822)
- [MDN - RegExp](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp#descri%C3%A7%C3%A3o)
- [MDN - Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)
- [MDN - String.prototype.search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)
- [MDN - RegExp.prototype.exec()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
- [Expressões regulares em JavaScript](https://www.devmedia.com.br/expressoes-regulares-em-javascript/37015)
- [Eloquent Javascript - Regular Expressions](https://eloquentjavascript.net/09_regexp.html)
