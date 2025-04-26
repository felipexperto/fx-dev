---
authorid: 1
category: Dev
title: Docker - Estudo para diminuir tamanho da imagem de uma app NextJS
date: "2025-04-26T00:00:00.000Z"
description: "Explorando estratégias práticas para reduzir custos de infraestrutura em clusters Kubernetes, focando na otimização de imagens Docker para um projeto Next.js"
---

## Introdução

Este é um post baseado num estudo que faz parte de uma iniciativa de redução de custos com infraestrutura.  
Alguns projetos podem conter dezenas ou centenas de containers rodando simultaneamente num cluster Kubernetes, portanto, cada megabyte é importante.  

Sobre o projeto analisado:

- Nome do projeto: `xablau`;
- NextJS: v11.1.2;
- Node: v16.15.0;

## Análise inicial

Ao buildar o projeto utilizando o comando `docker build -t xablau-original .`, acabamos com uma imagem no tamanho de **2.32Gb**. Segundo o Tech Lead da equipe , no registry do GCP (Google Cloud Panel) após passar por uma otimização a imagem possui o tamanho final de aproximadamente **650Mb**.

Para a versão **16.15.0** temos algumas tags disponíveis de imagens Node. Vamos ordená-las por tamanho:

| **Repository** | **Tag** | **Size** |
| ---------- | --- | ---- |
| node | 16.15.0-alpine | 112MB |
| node | 16.15.0-buster-slim | 176MB |
| node | 16.15.0-slim | 176MB |
| node | 16.15.0-bullseye-slim | 187MB |
| node | 16.15.0 (utilizada atualmente) | 907MB |
| node | 16.15.0-buster | 907MB |
| node | 16.15.0-bullseye | 937MB |  

Sabendo das versões disponíveis podemos realizar testes de build do projeto.

| **Tag** | **Status / Size** |
| ---------- | -------------- |
| 16.15.0-alpine | ❌  Build Error |
| 16.15.0-buster-slim | ❌  Build Error |
| 16.15.0-slim | ❌  Build Error |
| 16.15.0-bullseye-slim | ❌  Build Error |
| 16.15.0 | ✅ 2.32Gb |
| 16.15.0-buster | ❌ Não foi testado por ter o mesmo tamanho da imagem utilizada atualmente. |
| 16.15.0-bullseye | ✅ 2.34Gb |

E concluímos que nenhuma versão mais enxuta do que a atual nesta versão do Node supri as necessidades das dependências do projeto gerando um erro no build.


## Atualizando a versão do Node

De acordo com a documentação oficial do Next.js, a versão 11.1.2 é compatível com as seguintes versões do Node.js: `Node.js 12.22.0 ou posterior (até o Node.js 16.x)`. Portanto, realizaremos o upgrade para a versão `16.20`.


## Corrigindo o pipeline de build

Durante testes da tag **slim** foi possível perceber que o build era quebrado por ausênsia de bibliotecas nesta imagem Docker e inserimos um step extra: `RUN apt-get update && apt-get install -y libglu1 libxi6 libgconf-2-4`.

Após esse ponto, foi percebido um problema de **peer-dependency**, ou seja, algumas dependências utilizando outras e com versões diferentes. Para que isso não aconteça adicionamos ao comando de `npm install` o parâmetro `--legacy-peer-deps`. 

Após a correção foi buildada uma imagem de 1.5GB e testada a aplicação sem problemas.


```
// Criar imagem
docker build -t xablau-slim .

// Listar imagem
docker images

// Executar imagem
docker run -p 3000:5000 -dit {{nome-do-container}}

// Iniciar aplicação dentro do container
docker exec {{container-id}} npm start

// Endereço:
http://localhost:3000
```

## Conclusão

Com a mudança da imagem base de `node:16.15` para `node:16-slim`, conseguiremos reduzir o tamanho da imagem de maneira significante.

Se uma imagem gerada de 2.3Gb após otimização tem seu tamanho reduzido para 650Mb.

Então, 1.5Gb corresponde a aprox. 420Mb.
