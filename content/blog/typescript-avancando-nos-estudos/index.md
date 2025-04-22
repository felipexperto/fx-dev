---
authorid: 1
category: Dev
title: Typescript - Avançando nos estudos
date: "2024-01-24T10:00:00.284Z"
description: "Primeiros passos em Typescript(com exemplos) para quem já sabe Javascript."
---

No post passado nós cobrimos os pontos básicos que serão nossa fundação e agora vamos conversar sobre tópicos que solucionam problemas comuns no dia a dia de programação.

## Types

### Criando tipos personalizados

É bem comum termos espalhados pelos projetos mais de uma incidência de um tipo de variável que representa uma abstração de um objeto. Por exemplo, um carro, funcionário, estudante, cachorro, entre tantos outros.

Diante do cenário que a variável aparece em dois arquivos, repetir a tipagem fica bem ruim, né? Em algum momento você lembra de atualizar de um arquivo mas não do outro e vira aquela bagunça que já conhecemos.

A melhor solução seria ter um arquivo de onde você pode importar essa tipagem e reutilizar em qualquer lugar do projeto, certo? Então o `Type` entra em ação.

```ts
// Criando nosso Type
type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => string;
};

// Utilizando o Type
let funcionario: Funcionario = {
  supervisores: ["Ana", "João"],
  baterPonto: (horario) => (horario <= 7 ? "Ponto normal" : "Fora do horário"),
};

let funcionario2: Funcionario = {
  supervisores: ["Adriana", "Horácio"],
  baterPonto: (horario) => (horario <= 9 ? "Ponto normal" : "Fora do horário"),
};

console.log(funcionario.supervisores); // ["Ana", "João"]
console.log(funcionario2.baterPonto(10)); // "Fora do horário"
```

### Union Types

Ainda dentro do tópico de `Types` temos a possibilidade de definir que uma variável receba mais de um tipo de valor. Por exemplo, imagine que você está lidando com um software que possui cálculo de nota de alunos, alguns endpoints da API que você consulta retornam em `string` e outros em `number`. Então a solução fica da seguinte maneira:

```ts
// Repare no uso do pipe `|`
let nota: number | string = apiResponse.nota;
```

`Union Types` também pode servir para casos onde você tem um valor opcional:

```ts
let telefoneFixoOpcional: null | number = null;
// quem tem telefone fixo hoje em dia?
```

## Usando classes para criar objetos

### Classes e Atributos

Vamos exercitar a tipagem de classes com exemplos em JS e depois TS.

```js
class Data {
  constructor(dia, mes, ano) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(1, 2, 1970);
console.log(aniversario.dia); // 1
```

Repare no exemplo a seguir em Typescript que será necessária a tipagem dos atributos na classe e dentro do `constructor`.

Vale mencionar também que os atributos tem por padrão o acesso público, ou seja, é possível fazer o `console.log(aniversario.dia)` como no exemplo anterior e até alterar seu valor. Isso é do próprio Javascript.

Agora, com Typescript, caso você não queira que os valores sejam acessados fora da classe (e você tenha mais controle) é possível utilizar a palavra reservada `private`.

```ts
class Data {
  dia: number; // público
  public mes: number; // também é público
  private ano: number; // privado

  constructor(dia: number, mes: number, ano: number) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(1, 2, 1970);
console.log(aniversario.dia); // 1
console.log(aniversario.mes); // 2
console.log(aniversario.ano); // Property 'ano' is private and only accessible within class 'Data'.
```

Antes do próximo passo, vamos simplificar a declaração da classe `Data`:

```ts
class Data {
  constructor(
    public dia: number,
    public mes: number,
    private ano: number,
  ) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}
```

E adicionar um método que retorna se é um `dia` válido ou não.

```ts
class Data {
  constructor(
    public dia: number,
    public mes: number,
    private ano: number,
  ) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  public isValidDay(): boolean {
    return this.dia >= 1 && this.dia <= 31 ? true : false;
  }
}

const aniversario = new Data(32, 1, 1970);
console.log(aniversario.isValidDay()); // false
```

Só que olhar esse código não te causa estranheza? Você tem um método que valida o `dia` mas mesmo assim pode passar o valor de `32`, aí você pensa: ué??? 🤔

Vamos nos concentrar em validar o `dia` e implementar um `get` e um `set` que nos ajudarão com esse problema.

```ts
class Data {
  // o uso de underline a frente do nome da variável é uma convenção para indicar que a variável é privada
  private _dia: number = 1;

  get dia(): number {
    return this._dia;
  }

  set dia(valor: number) {
    if (valor >= 1 && valor <= 31) {
      this._dia = valor;
    } else {
      console.error(`O número ${valor} não é um Dia válido`);
    }
  }
}

const aniversario = new Data();
console.log(aniversario.dia); // 1
aniversario.dia = 32; // "O número 32 não é um Dia válido"
console.log(aniversario.dia); // 1
aniversario.dia = 5;
console.log(aniversario.dia); // 5
```

## Interfaces

Interfaces atualmente são um recurso inexistente no mundo Javascript e, portanto, só aplicável com Typescript. As interfaces podem ser usadas para descrever objetos, classes, funções e outros tipos de estruturas de dados.

> **Interface** é uma forma de definir uma estrutura de dados que descreve a forma ou formato que um objeto deve ter. Ela define um conjunto de propriedades que um objeto deve ter, bem como os tipos dessas propriedades. - Francielle Dellamora, [O mínimo que você precisa saber para iniciar um projeto em TypeScript](https://dev.to/dellamora/o-minimo-que-voce-precisa-saber-para-iniciar-um-projeto-em-typescript-l13?utm_source=pocket_reader)

> Segundo ChatGPT, Interfaces são úteis para:
>
> - **Verificação de tipo:** As interfaces são usadas pelo compilador do TypeScript para verificar se um objeto implementa corretamente as propriedades e métodos definidos na interface. Isso ajuda a evitar erros de tipagem e fornece maior segurança durante o desenvolvimento.
> - **Documentação**: As interfaces atuam como uma documentação para o código, pois fornecem informações sobre a estrutura esperada dos objetos que serão usados em determinado contexto.
> - **Reutilização e abstração**: As interfaces permitem criar contratos abstratos que podem ser implementados por várias classes ou objetos. Isso promove a reutilização de código e cria uma separação clara entre a definição de uma interface e sua implementação.

Vamos ao nosso primeiro exemplo que será um método simples que receberá duas informações.

```js
function cumprimentar(pessoa) {
  console.log(`Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos.`);
}

const pessoa = {
  nome: "Felipe",
};

cumprimentar(pessoa); // Olá, meu nome é Felipe e tenho undefined anos.
cumprimentar({}); // Olá, meu nome é undefined e tenho undefined anos.
```

Repare que a função não gera erro e imprimi as variáveis que não tiveram seus valores declarados como `undefined`. Na minha opinião, um problema mais grave do que um erro, afinal aqui estamos fazendo um `console.log` mas poderia acontecer numa interface, um menu de usuário, por exemplo.

Em Typescript, ao invés de colocar alguns `if` para confirmar se as propriedades não estão `undefined` podemos criar uma interface.

```ts
interface Humano {
  nome: string;
  idade: number;
}

function cumprimentar(pessoa: Humano) {
  console.log(`Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos.`);
}

const pessoa = {
  nome: "Felipe",
};

cumprimentar(pessoa); // Property 'idade' is missing in type '{ nome: string; }' but required in type 'Humano'. (2345)
cumprimentar({}); // Type '{}' is missing the following properties from type 'Humano': nome, idade(2345)
```

Você pode alterar um pouco o código e utilizar a interface no objeto `pessoa` também. Se você não colocar a idade, o erro só mudará de lugar, ou seja, é seguro 😂

```ts
const pessoa: Humano = {
  nome: "Felipe",
}; // Property 'idade' is missing in type '{ nome: string; }' but required in type 'Humano'.(2741)
```

Se fosse necessário passar um parâmetro opcional para a interface, poderíamos utilizar o `?` e fazer o seguinte:

```ts
interface Humano {
  nome: string;
  idade: number;
  nacionalidade?: string; // opcional
}
```

E se quiséssemos adicionar um atributo com nome dinâmico:

```ts
interface Humano {
  nome: string;
  idade: number;
  [prop: string]: any;
}
```

Adicionar um método:

```ts
interface Humano {
  nome: string;
  idade: number;
  saudar(sobrenome: string): void;
}

const pessoa: Humano = {
  nome: "Felipe",
  idade: 31,
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  },
};

pessoa.saudar("Silva");
```

E pra implementar numa Classe ao invés de Objeto, dá trabalho? Não.

```ts
class Cliente implements Humano {
  nome: string = "";
  idade: number = 30;
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "Fulano";
meuCliente.saudar("da Silva");
```

Posso adicionar outras propriedades na classe mesmo que não esteja dentro da interface `Humano`? Pode!

```ts
class Cliente implements Humano {
  nome: string = "";
  ultimaCompra: Date = new Date();
  idade: number = 30;
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  }
}
```

> **Uso de `implements` e `extends`**  
> Repare no uso da palavra `implements`, ela é utilizada quando você tem uma relação entre `Classe` e `Interface`. Na relação entre `Classes` é utilizado `extends`. E `Interface` com `Interface` é `extends` também.

Agora, pra implementar direto numa função:

```ts
interface FuncaoCalculo {
  (a: number, b: number): number;
}

// Alternativa 01
let potencia: FuncaoCalculo;
potencia = function (a, b) {
  return Math.pow(a, b);
};
console.log(potencia(2, 8));

// Alternativa 02 - Arrow Function
const potencia02: FuncaoCalculo = (a, b) => Math.pow(a, b);
console.log(potencia02(3, 6));
```

E é possível utilizar herança? Sim sim sim!

```ts
interface A {
  a(): void;
}

interface B {
  b(): void;
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

interface ABC extends A, B {
  c(): void;
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}
```

## Generics

Segundo os materiais que consultei o uso de Generics se encaixa no cenário onde você não tem certeza dos valores que receberá e essa funcionalidade te auxilia a criar blocos de código reutilizáveis. Além disso, ao utilizar Generics você tem flexibilidade, segurança, manutenção mais fácil e auxílio do Intellisense.

Não sei se a minha falta de frequência de uso influencia o julgamento mas a complexidade comparada aos tópicos anteriores é maior. No meu ponto de vista, essas qualidades podem ser aplicadas quando falamos em lidar com o mesmo tipo de entrada e retorno e sem diversos parâmetros, caso contrário, o entendimento é difícil.

```js
function echo(objeto) {
  return objeto;
}

// Possíveis resultados
console.log(echo("João")); // João
console.log(echo("João").length); // 4
console.log(echo(27)); // 27
console.log(echo(27).length); // 'Undefined' pois não existe método length disponível para tipo Number
```

Como nós podemos facilmente evitar o problema do `length` ao utilizar `number`? Utilizando Generics!

```ts
function echo<T>(objeto: T): T {
  return objeto;
}
```

O que aconteceu até agora?

- Nós falamos que a função contém um tipo `T`: `echo<T>`, **que nós ainda não declaramos**;
- A função recebe um objeto do tipo `T`: `(objeto: T)`;
- E retorna um resultado que também é do tipo `T`;

> **Aviso importante**  
> A letra `T` em si não é importante, todas essas incidências poderiam ser substituídas por `xablau`, por exemplo. Não se apegue a isso.

Vamos ver como ficam os `console.log`s agora.

```ts
// Possíveis resultados
console.log(echo("João")); // João
console.log(echo("João").length); // 4
console.log(echo(27)); // 27
console.log(echo(27).length); // Erro de compilação: Property 'length' does not exist on type '27'.(2339)
```

Como nós falamos que a função contém um tipo `T`, que ela recebe esse tipo e também o retorna, o Typescript automaticamente reconheceu que era um `number` e alertou que `number` não tem o método `length`. Vamos pra outro teste:

```ts
console.log(echo<number>("27").length);
// Erros:
// 1. Argument of type 'string' is not assignable to parameter of type 'number'.
// 2. Property 'length' does not exist on type 'number'.
```

Acima nós definimos manualmente que o tipo é `number` e passamos uma `string`. Então ele passou a disparar dois erros, o primeiro sobre o argumento ser `string` e o segundo sobre `length` não estar disponível num tipo `number`.

E ao passar um objeto, você tem disponível o autocompletar com Intellisense pois o Typescript reconhece as propriedades do objeto:

```ts
console.log(echo({ nome: "Fulano", idade: 30 }).idade); // Quando você colocar o ponto final `.`, ele exibirá 'nome' e 'idade'
```

E como fazer isso com arrays?

```ts
const avaliacoes: Array<number> = [10, 9.4, 6.5];
avaliacoes.push(8.4);
avaliacoes.push("5.5"); // Erro de compilação: Argument of type 'string' is not assignable to parameter of type 'number'.(2345)
```

```ts
function imprimir<T>(args: T[]) {
  args.forEach((elemento) => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(["1", "2", "3"]);
imprimir<{ nome: string; idade: number }>([
  { nome: "Beltrano", idade: 30 },
  { nome: "Ciclano", idade: 33 },
]);
```

Função com Generics:

```ts
// Alternativa 01
const chamarEcho: <T>(data: T) => T = echo;
console.log(chamarEcho<string>("Alguma coisa"));

// Alternativa 02
type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echo;
console.log(chamarEcho<string>("Alguma coisa"));
```
