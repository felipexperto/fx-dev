---
authorid: 1
category: Dev
title: "Redis - Primeiros Passos"
date: "2022-10-03T23:43:00.284Z"
description: "Redis - Primeiros Passos"
tldr: ""
---


## Introdução

Redis significa **RE**mote **DI**ctionary **S**erver. 

Diferente de um banco de dados tradicional como MySQL ou Oracle, é categorizado como um banco de dados não relacional, sendo muitas vezes referenciado pela sigla `NOSQL` (Not Only SQL). 

O Redis foi criado por Salvatore Sanfilippo (vulgo antirez) que liberou o Redis em 2009 de forma open-source. Nasceu para atender a uma demanda interna de demanda de performance na análise de logs em tempo real na startup de Salvatore.

É um servidor TCP que faz uso do modelo cliente-servidor. Isso significa que em geral uma requisição feita por um cliente ao servidor é seguida das seguintes etapas:

- O cliente envia um comando ao servidor e fica aguardando uma resposta do servidor (geralmente bloqueando a conexão) através de uma conexão estabelecida via socket;
- O servidor processa o comando e envia a resposta de volta ao cliente.

O armazenamento de dados em cache é válido quando existem dados que são utilizados com muita frequência e que não sofrem atualizações constantemente, poupando assim tempo e uso desnecessário do hardware. Por exemplo, imagine que o site chamado Resultado de Loterias tenha que exibir na sua página inicial os números do ultimo resultado da Mega-Sena, mas esses dados são fornecidos por uma outra empresa através de um serviço web.

## O que o Redis não é

- Não é um banco de dados relacional como o MySQL ou Oracle;
- Não é um banco de dados orientado a documentos como o MongoDB;
- Não é um banco de dados que você deveria usar para armazenar todos os seus dados;
- Não possui suporte oficial ao Windows;
- Não utiliza o protocolo HTTP.

## Características

- Armazena seus dados em memória, embora seja possível persistir os dados fisicamente. Mas é o fato de o Redis armazenar os dados em memória que o torna extremamente rápido, tanto para escrita como para leitura de dados;
- No Redis não existe o tipo de dados Integer;
- Todos os comandos executados no Redis são atômicos, e isso é garantido pela forma com que o Redis é executado, que é como uma aplicação **single-threaded** (enquanto um comando está sendo executado, nenhum outro comando será executado);
- Armazena os dados na forma de chave-valor, mas um ponto interessante sobre a estrutura de dados do Redis é que o valor contido na chave de um registro suporta diferentes formatos que podem ser strings, hashes, lists, sets e sets ordenados;
- Um valor do tipo string pode conter um tamanho de no máximo 512 Megabytes e, por ser um tipo de dado binary safe, podemos armazenar por exemplo um texto, um documento JSON, objetos serializados ou até mesmo os dados binários de uma imagem;

## Redis Clients

- [Lista de Clientes de Redis NodeJS](https://redis.io/docs/clients/#nodejs); 
- [Versão Online TryRedis](https://try.redis.io/);

## Convenção para nomear chaves no Redis

Utilizar `:` para compor um `namespace` na chave é uma convenção muito utilizada no Redis, sendo que um formato de chave muito comum assemelha-se com `tipo-de-objeto:identificador:nome-campo`.

Por exemplo, imagine uma chave utilizando esse formato que represente
o nome dos usuários de um sistema. Essa chave poderia ser da seguinte
forma: `usuario:Rodrigo Lazoti:nome`.

Sendo que usuário é o tipo de objeto, o valor `Rodrigo Lazoti` representa o nome do usuário e nome é o nome do campo que dá significado ao valor armazenado nesta chave.

## Referências:

- Livro: Armazenando dados com Redis por Rodrigo Lazoti (Casa do Código)
- [Redis](https://www.youtube.com/watch?v=HMEwYxXFTjM) (Dicionário do Programador)
- [Cache com Redis em Node.js](https://www.youtube.com/watch?v=hf3EHCXsRYM)
