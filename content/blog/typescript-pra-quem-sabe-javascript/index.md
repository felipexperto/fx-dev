---
authorid: 1
category: Dev
title: Typescript pra quem sabe Javascript
date: "2024-01-23T10:00:00.284Z"
description: "Primeiros passos em Typescript(com exemplos) para quem já sabe Javascript."
---

## O básico de Typescript para quem sabe Javascript

### Criando uma função

Vamos começar com um método que só recebe um nome (ou seja, tipo `string`) e retorna esse mesmo nome.

Em Javascript seria só fazer alguma das opções abaixo:

```js
// função padrão
function retornaNome(nome) {
  return nome;
}

// Atribuindo uma função anônima para uma variável
const retornaNome = function (nome) {
  return nome;
};

// Arrow function
const retornaNome = (nome) => nome;
```

Mas independentemente do modo que você declare sua função (e são muitas possíveis), em Typescript o seguinte erro será retornado:

```
Variable 'retornaNome' implicitly has an 'any' type.(7005)
```

Lembra do **Static Typing**? Pois é! Agora todo parâmetro recebido em um método terá de ter seu tipo declarado. Então vamos resolver o caso:

```ts
// função padrão
function retornaNome(nome: string) {
  return nome;
}
```

Resolvido! Tudo beleza agora! Mas e se eu quiser ter certeza que ao final a função vai devolver uma `string` e não uma loucura como um `number`, por exemplo? Voltemos para o código:

```ts
const retornaNome = (nome: string): string => {
  return nome;
};
```

Pronto! Essa declaração `: string` logo após os parênteses que recebe os parâmetros da função diz que obrigatoriamente deve ser retornada uma `string`. Tanto é que se você quiser testar pode trocar para `number` e verá que o seguinte erro será retornado: ``
`Type 'string' is not assignable to type 'number'.(2322)`

E digo mais, somente pela zoeira, se você mudar o `return` para `return parseInt(nome);` (o que vai fazer com que seja retornado um inteiro), o erro vai embora (_inteligentão_ esse Typescript).

E mais uma coisa, se você declarar uma variável com um tipo `number` e depois tentar atribuir um valor `boolean`, o Typescript vai reclamar também. Isso acontece porque ele **infere** o tipo da variável com base no primeiro valor. Por exemplo:

```ts
let idade = 27;
idade = "vinte e sete"; // Type 'string' is not assignable to type 'number'.
```

### E como tipar uma função que não retorna nada?

Bem simples, vamos utilizar `void`. Esse é um tipo utilizado quando uma função realiza somente um `side effect`, vulgo efeito colateral, tais como: emitir uma mensagem de log ou atualizar uma base de dados.

Veja o código a seguir:

```ts
const retornaNome = (nome: string): void => {
  console.log(nome);
};
```

Também existe um outro tipo semelhante, o `never`. Esse é indicado para quando uma função sempre dispara um erro ou fica em loop infinito e nunca retorna um valor.

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

### Então quais são os tipos básicos em Typescript?

Essa é fácil, os tipos básicos em Typescript são:

- `boolean`: `true` ou `false`;
- `number`: tanto `float` quando `integer`;
- `string`: texto;
- `null`;
- `undefined`;
- `symbol`;
- `bigint`;
- `any` : Variáveis que não tem tipo definido e nem foram inicializadas (atribuídas algum valor) são consideradas do tipo `any`. Se você está migrando um código Javascript para Typescript vale a pena considerar seu uso para poder fazer uma conversão gradativa do seu código. Caso contrário, declarar variáveis utilizando-o seria a mesma coisa que fazer em Javascript 🤷.

### Arrays e Tipos

E os arrays? Onde ficam? Como faz?

```ts
let hobbies: string[] = ["Cozinhar", "Treinar", "Jogar"];
```

Você também pode fazer com que ele confira a ordem dos itens, criando uma `tupla`:

```ts
let endereco: [string, number, string] = ["Rua das Flores", 123, "Bloco A"];
```

E a aplicação numa função:

```ts
function retornarArray(...args: number[]): number[] {
  return args;
}

const numeros = retornarArray(1, 2, 3, 4, 5);
console.log(numeros);
```

### Objetos e Tipos

Ainda falta visitarmos como ficarão nossos objetos tipados.

```ts
let usuario: { nome: string; idade: number } = {
  nome: "João",
  idade: 31,
};
```

## Conclusão

Até o momento passamos por diversos tópicos e, com isso você já adquiriu conhecimento básico de Typescript, é capaz de explicar o que é, quais são as vantagens, como executar localmente ou num playground e como tipar suas funções e variáveis.

Nos próximos passos vamos trabalhar com exemplos mais complexos, explorar como reutilizar as tipagens e o que mais for necessário para o nosso entendimento 😉

## Referências

- [Entendendo Typescript com Leonardo Leitão - cod3r](https://www.udemy.com/course/typescript-pt/)
- [Never vs Void in TypeScript: Understanding Key Differences](https://javascript.plainenglish.io/the-difference-between-never-and-void-in-typescript-4f5f165afb37)
- [O mínimo que você precisa saber para iniciar um projeto em TypeScript](https://dev.to/dellamora/o-minimo-que-voce-precisa-saber-para-iniciar-um-projeto-em-typescript-l13?utm_source=pocket_reader)
- [7 dicas para iniciantes em Typescript](https://www.tabnews.com.br/MagoAcademico/7-dicas-para-iniciantes-em-typescript)
- [TypeScript: Tuplas](https://imasters.com.br/desenvolvimento/typescript-tuplas)
