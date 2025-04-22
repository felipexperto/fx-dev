---
authorid: 1
category: Dev
title: "Javascript Cheatsheet"
date: "2021-12-20T00:00:00.000Z"
description: "Javascript Cheatsheet. Alguns macetes pra solucionar problemas rotineiros."
tldr: ""
---

## Sempre mantenha Strict Mode configurado

Ter o `Strict Mode` declarado irá limitar você de escrever código inseguro. Além disso, é bem fácil de ativá-lo. Basta adicionar o código abaixo como primeira linha em seus arquivos Javascript.

```
use strict
```

Quando o `strict mode` está declarado:

- Lança alguns erros que foram previamente mantidos em silêncio;
- Corrige erros que tornam difícil para o motor do Javascript performar otimizações;
- Proibi o uso de palavras reservadas prováveis de serem definidas em futuras versões do ECMAScript;
- Lança erros quando ações "inseguras" são realizadas (como obter acesso ao objeto global)

Fonte:

- [Always Keep Strict Mode On](https://blog.bitsrc.io/8-steps-to-secure-javascript-in-2021-6d54d5415264)

## Como evitar conversões indesejadas em Javascript

[Siga este link](/como-evitar-conversoes-indesejadas-em-javascript) para um post dedicado ao assunto no blog :)

## Checar se a aba do navegador está ativa/focada

```
const isBrowserTabInView = () => document.hidden;
```

Fonte:

- [Check if the current tab is in view / focus](https://medium.com/dailyjs/13-javascript-one-liners-thatll-make-you-look-like-a-pro-29a27b6f51cb)

## Checar se um objeto está vazio em Javascript

```
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

// ou

function isEmptyObject(obj) {
    return Object.getOwnPropertyNames(obj).length === 0;
}

// ou

function isEmptyObject(obj){
    return JSON.stringify(obj) === '{}';
}

// ou

function isEmptyObject(obj) {
    return Object.entries(obj).length === 0;
}
```

Fonte:

- [How to Check if an Object Is Empty in JavaScript](https://code.tutsplus.com/tutorials/how-to-check-if-an-object-is-empty-in-javascript--cms-37053)

## Checar se uma propriedade existe dentro de um objeto

```
const obj = { name: 'João', lastname: 'Silva' }

'idade' in obj // false
'name' in obj // true

if ('name' in obj) doSomething();
```

Fonte:

- [in operator - MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/in)

## Como adicionar novo valor (par chave/valor) em um objeto

```
const obj = { key1: value1, key2: value2 };

obj.key3 = "value3"; // primeira maneira, notação com ponto
obj["key3"] = "value3"; // segunda, notação com colchetes
Object.assign(obj, {key3: "value3"}); // terceira, Object.assign

// quarta maneira, com spread operator
const pair = { key3: "value3" };
obj = { ...obj, ...pair };
```

Fonte:

- [Como posso adicionar um par chave / valor a um objeto JavaScript?](https://www.ti-enxame.com/pt/javascript/como-posso-adicionar-um-par-chave-valor-um-objeto-javascript/967393095/)
- [How can I add a key/value pair to a JavaScript object?](https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object)

## Como copiar/duplicar um objeto em Javascript

Antes de trazer o trecho de código, você já ouviu falar de `Shallow Copy` e `Deep Copy`?  
Esses termos apesar de respectivamente significarem "Superficial" e "Profundo" não estão relacionados a quantidade de níveis que um objeto possui ou limite de níveis que podem ser copiados, e sim ao fato da cópia ser um objeto totalmente independente do original.

Veja o código abaixo primeiro e vamos discutir isso melhor:

```
const user = {
  personalData: {
    firstName: 'Fulano',
    lastName: 'Silva',
    age: 40
  }
}

const newUser = user; // essa é uma maneira de se copiar o objeto user
const newUser = { ...user } // essa é outra abordagem e utiliza o spread operator
const newUser = Object.assign({}, food); // e esse modo utiliza Object.assign
```

Todos os modos acima terão o mesmo resultado e o que você precisa saber é o seguinte: São cópias superficiais (`shallow copy`) e portanto se você alterar o objeto `user`, seu objeto `newUser` também será alterado. Estranho, né?

Isso acontece porque você está apontando para uma referência. Em outras palavras, quando você declara o objeto `user`, acaba colocando ele num local da memória da sua máquina, depois quando você declara que `newUser = user` você está apontando para o mesmo local, sacou?

E como você faz pra copiar o conteúdo de `user` para uma variável diferente e que seja independente dessa posição na memória? Ou seja, se você alterar `user` não altere `newUser`?

`Deep Copy`! Para copiar um objeto desse modo você precisa transformá-lo em string e depois num objeto de novo. Vejamos:

```
const newUser = JSON.parse(JSON.stringify(user)); // é só essa linha mesmo
```

Se você quer comprovar se eles são iguais, veja o próximo tópico: Comparar dois objetos em Javascript.

Fonte:

- [3 Ways to Clone Objects in JavaScript](https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/)
- [Understanding Deep and Shallow Copy in Javascript](https://webustry.com/understanding-deep-and-shallow-copy-in-javascript/)

## Como comparar dois objetos em Javascript

A comparação de objetos em Javascript não pode ser realizada utilizando simplesmente o operador de igualdade (strict operador `==`) ou o operador de igualdade rigorosa (strict equality operador `===`), por exemplo:

```
const a = {name: ''}
const b = {name: ''}

a == b   // false
a === b  // false
```

A maneira mais usual de checar a igualdade de dois objetos, ou seja, se eles tem as mesmas chaves e valores é utilizando `JSON.stringify`:

```
JSON.stringify(a) === JSON.stringify(b); // true
```

Qual é a pegadinha? Você deve se atentar a ordem das chaves, se elas forem diferentes o retorno será falso:

```
const obj = { name: 'João', lastname: 'Silva' }
const obj2 = { lastname: 'Silva', name: 'João' }

JSON.stringify(obj) === JSON.stringify(obj2); // false
```

Isso nos leva para o próximo tópico...

Fonte:

- [How to Compare 2 Objects in JavaScript](https://www.samanthaming.com/tidbits/33-how-to-compare-2-objects/#deep-nested-comparison)
- [Equality (==)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
- [Strict equality (===)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)

## Como ordenar chaves de um objeto recursivamente em Javascript

```
function sort(object){
    if (typeof object != "object" || object instanceof Array) // Not to sort the array
        return object;
    var keys = Object.keys(object);
    keys.sort();
    var newObject = {};
    for (var i = 0; i < keys.length; i++){
        newObject[keys[i]] = sort(object[keys[i]])
    }
    return newObject;
}

const obj = {
    "Memo": {
        "itemAmount1": "5",
        "taxName1": "TAX",
        "productPrice1": "10",
        "accountName1": "Account Receivable (Debtors)"
    },
    "Footer": {
        "productDescription2": "Maggie",
        "itemQuantity2": "49.5",
        "accountName2": "Account Receivable (Debtors)",
        "taxName2": "TAX"
    },
    "Header": {
        "itemDiscount3": "10",
        "accountName3": "Account Receivable (Debtors)",
        "productPrice3": "10",
        "taxName3": "TAX"
    }
}

const orderedObj = sort(obj);
```

Fonte: [Sorting JavaScript Object by key value Recursively](https://stackoverflow.com/questions/24629917/sorting-javascript-object-by-key-value-recursively)

## Como concatenar variáveis em Javascript

Você pode seguir o caminho mais moderno utilizando [template literals](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals) (ECMAScript 2015, não suportado pelo IE):

```
const name = "Felipe";
const age = "30";

const result = `My name is ${name} and I'm ${age} years old`
```

Ou seguir o modo clássico:

```
const name = 'Felipe';
const age = '30';

const result = "My name is " + name + " and I'm " + age + " years old";
```

## Como verificar undefined no Javascript

```
if (typeof suaVariavel === 'undefined') {
    // faça alguma coisa
}
```

## Como colocar argumentos default (padrão) em uma função

```
// Solução em ES6/ES2015, ou seja, só não funciona no IE
function multiplicar(a = 1, b = 2) {
    return a * b;
}

// Fallback: A opção alternativa é confirmar se cada argumento existe
// O exemplo utiliza um ternário mas você pode usar um 'if'
function multiplicar(a, b) {
    const valor1 = (typeof a !== 'undefined') ?  a : 1
    const valor2 = (typeof b !== 'undefined') ?  b : 2
    return valor1 * valor2
}
```

Fonte:

- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/default_parameters)
