---
authorid: 1
category: Dev
title: "Docker: Guia de sobrevivência - Parte 2"
date: "2020-12-27T11:32:00.284Z"
description: "Vamos explorar como manter um container em execução, realizar comandos dentro do mesmo, pará-lo e, como realizar a criação de uma imagem customizada para o Docker."
tldr: "Sabendo alguns comandos básicos de Docker, tais como: `docker run`, `start`, `build`, `images`, `ps`, `rm`, `rmi`, vamos explorar como manter um container em execução, realizar comandos dentro do mesmo, pará-lo e, como realizar a criação de uma imagem customizada para o Docker."
---

Sem delongas, vamos continuar nosso [processo da parte 1](/docker-guia-de-sobrevivencia-parte-1) e manter um container em pé sem travar nosso Terminal.

## Baixando uma imagem base

A imagem escolhida para utilizarmos é do Ubuntu: `git pull ubuntu` e, é importante dizer que quando esse comando executa, pega a versão mais recente da [imagem do Ubuntu no Docker Hub](https://hub.docker.com/_/ubuntu). Você poderia estipular uma versão específica utilizando essa sintaxe: `docker pull ubuntu:21.04`

## Criando um container e rodando comandos

Execute nossa imagem com `docker run`, mantendo o terminal interativo com a flag `-it` para executarmos comandos dentro do container e nomeando nosso container como `lab` utilizando a flag `--name`: `docker run -it --name lab ubuntu`

Pronto, se você rodar o comando `ls`, poderá ver uma estrutura de pastas.  
Estamos executando um sistema Linux "enxuto" mas vamos fazer algo mais divertido do que listar diretórios, certo?

- Atualize os pacotes do Ubuntu: `apt-get update`
- Instale o pacote sudo: `apt-get -y install sudo`
- Digite `echo $USER` e repare que é retornada uma string em branco
- Então vamos mudar para o *super user*: `sudo su`
- Digite `echo $USER` novamente e veja que a resposta é `root`
- Instale o pacote `cowsay`: `sudo apt-get -y install cowsay`
- Rode o comando: `cowsay MUUUUUU`
- Agora você tem uma vaquinha falante 🐮
- Para sair, digite `exit` quantas vezes forem necessárias até seu Terminal voltar ao normal

Agora vamos verificar se o container continua em pé com: `docker ps`  
A resposta é sim, então vamos entrar novamente nele: `docker exec -it lab bash`  
E se quisermos executar o comando `cowsay` temos somente que trocar nosso usuário com `sudo su`, pois nossas modificações foram mantidas.

## Parando o container

Vamos parar o container com: `docker stop lab`
E a lista retornada do comando `docker ps` deve estar vazia.

## Subindo novamente o container

Se quiser recomeçar o processo, é possível subir o container novamente com `docker start lab`
E repetir o ciclo com `docker exec -it lab bash` 

## Utilizando Dockerfile para facilitar a construção de imagens

Imagine cada pessoa desenvolvedora tendo que aplicar diversos comandos sobre uma imagem base para rodar um projeto. A margem de erro seria enorme e o tempo consumido também. Então eis que surge o **Dockerfile**.

### Dockerfile

O Dockerfile é um arquivo que comumente vai na raiz de nosso projeto e permite que construamos nossas próprias imagens e a utilizemos como base para os containers. Abaixo temos um exemplo de configuração:

```docker
FROM imagem     # Imagem base que estamos utilizando
RUN comando     # Comando bash
WORKDIR /app    # Diretório "raíz" para os comandos a seguir
COPY . /app     # Copia arquivos para dentro do container
VOLUME /app     # Volumes exportos para fora do container
EXPOSE 3000     # Portas liberadas para fora do container
CMD ["comando", "parametros", …] # Comando que deve ser executado assim que um container sobe
```

Vamos reconstruir nossa imagem Ubuntu com suas dependências utilizando Dockerfile.

```docker
# imagem base
FROM ubuntu

# dependências
RUN apt-get update && apt-get -y install sudo && sudo apt-get -y install cowsay

# "cowsay" é instalado em /usr/games
ENV PATH $PATH:/usr/games

# as instruções passadas no comando 'docker run' serão executadas com bash
CMD /bin/bash
```

Agora vamos rodar o comando para criar a imagem: `docker build -t lab_image .`

Confirmar se a imagem foi criada: `docker images | grep lab_image`

E rodar a imagem: `docker run --rm lab_image cowsay muuuu`


### Um pouco mais sobre Entrypoint e CMD

O Docker tem um `entrypoint` padrão, que é: `/bin/sh -c` mas não tem um comando especificado.  
Em outras palavras, o `entrypoint` especifica o comando que será executado sempre que o container iniciar e o `CMD` especifica os argumentos que serão passados para o `entrypoint` e, pelo menos um deles deve estar especificado no `Dockerfile`.

Quando você utiliza o comando `docker run -i -t ubuntu bash`, o entrypoint é o padrão, a imagem é a Ubuntu e o comando é `bash`.

Desse modo, o que realmente é executado é: `/bin/sh -c bash`.


### O comando RUN

O comando `RUN` cria uma camada nova no container (os container são feito de camadas read-only onde a ultima camada é read/write), por isso é bom concatenar o máximo de comando possível pro seu container ficar com menos camadas assim economizando espaço, ganhando performance.

## Indicação de curso

- [Docker and Kubernetes - Full Course for Beginners (freeCodeCamp)](https://www.youtube.com/watch?v=Wf2eSG3owoA)

## Indicação de leitura

- [Best Practices for Writing a Dockerfile](https://blog.bitsrc.io/best-practices-for-writing-a-dockerfile-68893706c3)
- [The Essential Docker, Dockerfile, and Docker Compose Cheat Sheet](https://medium.com/better-programming/the-essential-docker-dockerfile-and-docker-compose-cheat-sheet-8bf1c42876c1)

## Referências:

- [20 Funny Commands of Linux or Linux is Fun in Terminal](https://www.tecmint.com/20-funny-commands-of-linux-or-linux-is-fun-in-terminal/)
- [How to install a package using apt-get in ubuntu container inside Docker](https://stackoverflow.com/questions/45302558/how-to-install-a-package-using-apt-get-in-ubuntu-container-inside-docker)
- [Why docker container exits immediately](https://stackoverflow.com/questions/28212380/why-docker-container-exits-immediately)
- [What does “sudo apt-get update” do?](https://askubuntu.com/questions/222348/what-does-sudo-apt-get-update-do)
- [What is the difference between CMD and ENTRYPOINT in a Dockerfile?](https://stackoverflow.com/questions/21553353/what-is-the-difference-between-cmd-and-entrypoint-in-a-dockerfile)
- [docker/whalesay](https://hub.docker.com/r/docker/whalesay/)
