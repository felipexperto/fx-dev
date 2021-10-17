---
authorid: 1
category: Dev
title: "Como evitar conversões indesejadas em Javascript"
date: "2021-10-17T10:30:00.000Z"
description: ""
tldr: ''
---

## Introdução

Javascript é uma linguagem de programação de tipagem fraca, ou seja, você não precisa declarar os tipos de suas variáveis ou constantes (string, number, boolean...).

E como ela reage a isso? Acontece um efeito chamado *Type Coercion* que é simplesmente a conversão de valores de um tipo de dado para outro. Ainda não ficou muito claro, vamos ver um exemplo:

```
const ageString = "20"; // string
const ageNumber = 20;   // number

ageString == ageNumber; // true
ageString === ageNumber; // false

ageString + ageNumber; // "2020" (string)
ageString * ageNumber; // 400 (number)

```

Nós temos algumas medidas que podem ser tomadas e que não dependem de bibliotecas como [propTypes](https://www.npmjs.com/package/prop-types) ou supersets como [Typescript](https://www.typescriptlang.org/).

## Checar o tipo da variável antes de realizar uma operação

```
const isNumber = (val) => typeof val === 'number' && val === val;
const isString = (val) => typeof val === 'string' || val instanceof String;

isNumber(1);     // true
isNumber('1');   // false
isNumber(NaN);   // false
isString('10');  // true
isString(false); // false
isString(NaN);   // false
isString(undefined); // false
```

## Converter os valores antes de realizar uma operação

```
const ageString = "20"; // string
const ageNumber = 20;   // number

const result = parseInt(ageString) + parseInt(ageNumber);
```

Por que não aconselho fazer um `parseInt` no resultado, dessa maneira: `parseInt(ageString + ageNumber)`? Você pode introduzir um comportamento inconsistente e acabar com bug se por acaso um valor for `null` ou `undefined`, vamos ver?

```
const ageString = "20"; // string
const ageNumber = 20;   // number

parseInt(ageString + undefined); // 20
parseInt(ageString + null) // 20
parseInt(undefined + ageNumber) // NaN
parseInt(null + ageNumber) // 20
parseInt(null + null) // 0
parseInt(undefined + undefined) // NaN

```

Não ficou muito previsível, né? Vamos conferir o `parseInt` nos valores separados?

```
parseInt(ageString) + parseInt(ageNumber) // 40
parseInt(ageString) + parseInt(undefined) // NaN
parseInt(ageString) + parseInt(null)      // NaN
parseInt(undefined) + parseInt(ageNumber) // NaN
parseInt(null) + parseInt(ageNumber)      // NaN
parseInt(null) + parseInt(null)           // NaN
parseInt(undefined) + parseInt(undefined) // NaN
```

## Concatenar strings sem e com template literals

Vamos reutilizar nosso exemplo acima e ver como nosso resultado ficaria se nosso objetivo fosse concatenar strings (sem template literals):

```
String(ageString) + String(ageNumber) // '2020'
String(ageString) + String(undefined) // '20undefined'
String(ageString) + String(null)      // '20null'
String(undefined) + String(ageNumber) // 'undefined20'
String(null) + String(ageNumber)      // 'null20'
String(null) + String(null)           // 'nullnull'
String(undefined) + String(undefined) // 'undefinedundefined'
```

Agora com sintaxe mais reduzida utilizando template literals:

```
`${ageString}${ageNumber}` // '2020'
`${ageString}${undefined}` // '20undefined'
...
```

Também existem mais dois métodos de converter em string:

- `value.toString()`, que infelizmente não funciona se o valor for `null` ou `undefined`, então, melhor não utilizar;
- `"" + value`, não acho essa abordagem clara mas funciona, vai do gosto do freguês;

## Converter objetos em string

Não tente converter um objeto inteiro em string como na maneira abaixo, não será efetivo:

```
const obj = { name: 'João', lastname: 'Silva' };

String(obj) // '[object Object]' (isso NÃO funciona)
`${obj.name} ${obj.lastname}` // 'João Silva' (isso funciona)

```

Para transformar um objeto em string, utilize `JSON.stringify(obj)`;


Fonte:
- [How to Avoid JavaScript Type Conversions](https://blog.bitsrc.io/how-to-avoid-javascript-type-conversions-29e1258f37d8)
- [A linguagem Javascript](https://universidadedatecnologia.com.br/a-linguagem-javascript/)
- [30 Seconds of Code - isNumber](https://www.30secondsofcode.org/js/s/is-number)
- [Check if a variable is a string in JavaScript](https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript)
- [Template literals (Template strings) - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [JSON.stringify() - MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [Converting a value to string in JavaScript](https://2ality.com/2012/03/converting-to-string.html)