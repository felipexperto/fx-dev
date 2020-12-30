---
authorid: 1
category: Dev
title: "Docker cheatsheet (comandos e macetes)"
date: "2020-12-28T22:28:00.284Z"
description: "Esse artigo tem o objetivo audacioso de ser melhor que a lista de macetes do GTA: San Andreas."
tldr: "Esse artigo tem o objetivo audacioso de ser melhor que a lista de macetes do GTA: San Andreas. Essa é pra mim e pra você, pessoa desenvolvedora vencida pelo cansaço ou com memória de peixe e sendo procurada pelo Nemo."
---

## Comandos Docker


### Apagar

<div class="fx-group">

Apagar um container
- `docker rm [name]`

</div>
<div class="fx-group">

Apagar containers que já morreram
- `docker rm -v $(docker ps -a -q -f status=exited)`

</div>
<div class="fx-group">

Apagar todos containers não sendo executado
- `docker container prune`

</div>
<div class="fx-group">

Parar e apagar todos os containers forçadamente
- `docker container stop $(docker container ls –aq) && docker system prune –af ––volumes`

</div>
<div class="fx-group">

Apagar todas as imagens untagged ( &#60;none&#62; )
- `docker rmi $(docker images | grep '^<none>' | awk '{print $3}')`  
- Forçando: `docker rmi -f $(docker images | grep '^<none>' | awk '{print $3}')`

</div>
<div class="fx-group">

Apagar uma imagem específica
- `docker rmi [image name] `

</div>
<div class="fx-group">

Apagar imagens soltas
- `docker rmi $(docker images -f dangling=true -q)`

</div>
<div class="fx-group">

Apagar imagens baseando-se em tempo
- Remove todas as imagens criadas nas últimas 24h: `docker image prune –a ––filter "until=24h"`

</div>
<div class="fx-group">

Apagar imagens rotuladas como "old" pelo Docker
- `docker image prune ––filter="label=old"`

</div>
<div class="fx-group">

Apagar volumes esquecidos
- `docker run -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker:/var/lib/docker --rm martin/docker-cleanup-volumes`

</div>
<div class="fx-group">



### Atribuir

<div class="fx-group">

Atribuir variável de ambiente para container
- `docker run -e AUTHOR="Nome do autor" dockersamples/static-site`  
</div>



### Baixar

<div class="fx-group">

Baixar uma imagem
- `docker pull [image name] `

</div>



### Construir
<div class="fx-group">

Construir uma imagem baseado em um Dockerfile
- `docker build .`

</div>
<div class="fx-group">

Construir uma imagem baseado em um Dockerfile com um nome especificado
- `docker build -t lab_image .`

</div>



### Criar

<div class="fx-group">

Criar um container baseado numa imagem
- `docker run [image name] `

</div>

<div class="fx-group">

Criar um container baseado numa image
- `docker run [image name] `

</div>
<div class="fx-group">

Criar um container sem travar o terminal (detached)
- `docker run -d [image name]`

</div>
<div class="fx-group">

Criar um container e entrar no modo interativo, permitindo executar comandos dentro dele
- `docker run -it [image name] sh ` (shell)
- `docker run -it [image name] bash ` (bash)
  - Para sair, executar `exit` 

</div>
<div class="fx-group">

Criar um container e expor porta para acesso ao serviço  
- Permitir que um usuário na rede acesse nossa aplicação (rodando na porta 5000) utilizando o IP + porta 80: `docker run -p 80:5000 [image name] `
- Criando portas aleatórias: `docker run -P [image name]` 

</div>
<div class="fx-group">

Criar container nomeando-o
- `docker run -- name [nome] [Image name]`

</div>



### Executar

<div class="fx-group">

Executar um comando dentro de um container em execução
- `docker exec [container id] [command] `

</div>



### Exibir

<div class="fx-group">

Exibir informações da versão instalada do Docker  
- Para uma resposta simplificada: `docker -v`  
- Para uma resposta detalhada: `docker version`

</div>
<div class="fx-group">

Exibir a quantidade de memória sendo utilizada pelo container  
- `docker stats [ID do container]`

</div>
<div class="fx-group">

Exibir o IP de um container  
- `docker run -it [image name] sh` e em seguida `hostname -i`

</div>
<div class="fx-group">

Exibir informações de um container:  
- `docker inspect [ID do container]`

</div>



### Iniciar

<div class="fx-group">

Iniciar container utilizando ID
- `docker start [container id]`

</div>



### Listar

<div class="fx-group">

Listar todas as imagens: 
- `docker images -a`

</div>
<div class="fx-group">

Listar containers em execução:
- `docker ps` ou ``docker container ls`

</div>
<div class="fx-group">

Listar todos os containers: 
- `docker ps -a` ou `docker container ls -a`


</div>
<div class="fx-group">

Listar somente IDs dos containers
- `docker ps -q`

</div>
<div class="fx-group">

Listar portas do container:
- `docker port [container id]`
</div>



### Parar

<div class="fx-group">

Parar uma instância
- `docker stop [container id] ou docker stop [container name]`
- Com zero segundos de *delay*: `docker stop -t 0 [container id]`

</div>



## Referências

- [Is there a difference between “docker ps” and “docker container ls”?](https://stackoverflow.com/questions/45254677/is-there-a-difference-between-docker-ps-and-docker-container-ls/45254760#:~:text=docker%20ps%20is%20shorthand%20that,you%20should%20probably%20prefer%20it.)
- [Docker: Criando containers sem dor de cabeça](https://www.alura.com.br/curso-online-docker-e-docker-compose)
