---
authorid: 1
category: Dev
title: "Docker: Guia de sobrevivência - Parte 1"
date: "2020-12-26T23:13:00.284Z"
description: "Por onde começar com Docker? Essa foi uma dúvida que me perseguiu por um bom tempo. Vamos explorar alguns conceitos e comandos básicos."
tldr: "Imagino que você já saiba <a href='/docker-quando-utilizar'>o porquê de estar utilizando Docker</a>. Então, por onde começar com Docker? Essa foi uma dúvida que me perseguiu por um bom tempo. Vamos explorar alguns conceitos e comandos básicos."
---

## Imagem

Acredito que a melhor maneira de explicar o conceito de imagem seja comparando com o meio físico.  
Imagine um disco de DVD (pode ser de um filme ou um jogo), é um conjunto de arquivos, todos precisam estar presentes e não podem estar corrompidos para que funcione conforme planejado.

Isso equivale às imagens do Docker. Por exemplo, digamos que você queira rodar uma aplicação que precisa do Node como dependência. Em uma situação sem Docker, você iria no site e baixaria um executável. Após o download, você executaria a instalação e todos os arquivos e diretórios seriam colocados em seus devidos lugares. A imagem do Docker é exatamente isso. O conjunto de arquivos prontos para serem executados, esperando por um comando.

## Container

Um container nada mais é do que a **Imagem em execução**.  
Linhas acima mencionei um filme ou jogo, certo? Agora imagine-os sendo executados e você podendo rodar comandos e ações.

Nas linhas seguintes você pode conferir uma explicação em *tecniquês*:

Containers são versões Linux super otimizadas onde você pode instalar **uma instância** de alguma ferramenta, como por exemplo: node, mongo, redis, ubuntu, mysql.

> E como você sabe se existem imagens prontas das ferramentas que você necessita?  
> Basta acessar o [Docker Hub](https://hub.docker.com/search/?q=&type=image) e procurar por elas.

Também são ambientes completamente isolados que podem ter seus próprios processos ou serviços, como máquinas virtuais, contudo, eles compartilham do mesmo kernel do sistema operacional (responsável por se comunicar com o hardware). 

Isso quer dizer que não existe um sistema operacional dentro de cada container e, por consequência, isso aumenta a velocidade de execução e consome menos memória RAM.


## Mão na massa

Tendo em mente as definições acima, podemos iniciar nossa parte prática e, o primeiro passo será a instalação do Docker. 


### Instalando Docker

No site [docs.docker.com](https://docs.docker.com/) você pode encontrar a versão para [Mac](https://docs.docker.com/docker-for-mac/install/), [Linux](https://docs.docker.com/engine/install/ubuntu/) e [Windows](https://docs.docker.com/docker-for-windows/install/).  
Siga os passos conforme seu sistema operacional.


### Confirmando que a instalação foi um sucesso

Para conferir se o Docker está instalado em sua máquina, abra o terminal de sua preferência (prompt de comando, Git CLI, Tmux, iTerm, ...) e digite: `docker -v`. A versão deve ser retornada com sucesso, por exemplo: `Docker version 19.03.13, build 4484c46d9d`. Para uma resposta mais detalhada utilize `docker version`.


### Baixando e executando a primeira imagem

Vamos utilizar a imagem de [hello world](https://hub.docker.com/_/hello-world) do Docker.  
Sendo assim, rode o seguinte comando no seu terminal: `docker pull hello-world`.  
Isso fará com que o Docker da sua máquina se comunique com o repositório de imagens, o [Docker Hub](https://hub.docker.com/search/?q=&type=image), procure pela imagem de nome `hello-world` e faça seu download.

Se tudo funcionar conforme o esperado, você terá um feedback semelhante a este abaixo:

```docker
Using default tag: latest
latest: Pulling from library/hello-world
0e03bdcc26d7: Pull complete
Digest: sha256:1a523af650137b8accdaed439c17d684df61ee4d74feac151b5b337bd29e7eec
Status: Downloaded newer image for hello-world:latest
docker.io/library/hello-world:latest
```

Se você ainda não acredita que a imagem foi realmente baixada, rode o seguinte comando: `docker images | grep hello`.

Nós estamos solicitando uma lista de imagens e filtrando com o comando `grep` somente aquelas que contém a palavra `hello`.

Seu feedback será parecido com esse:

```docker
hello-world   latest   bf756fb1ae65   11 months ago   13.3kB
```

Sabendo que nossa imagem foi baixada, vamos executá-la com: `docker run hello-world`.  
Um texto aparecerá no seu Terminal e as duas primeiras linhas serão:

```docker
Hello from Docker!
This message shows that your installation appears to be working correctly.
```

Isso quer dizer que a imagem foi executada com sucesso.  
Mas é só isso? O que aconteceu realmente? 🤔

### Descobrindo o que aconteceu

Antes de mais nada, vamos relembrar que o Docker cria containers, que são as imagens em execução. E para listar os containers ativos nós temos o comando: `docker ps`. Se você executá-lo, nenhum container será retornado na lista, porém, se você executar `docker ps -a`, que retorna os containers parados, lá está ele:

```docker
CONTAINER ID   IMAGE         COMMAND    CREATED          STATUS                      PORTS   NAMES
438cc24de1c1   hello-world   "/hello"   46 seconds ago   Exited (0) 45 seconds ago           trusting_noyce
```

Em poucas palavras, o Docker rodou a imagem `hello-world`, executando o comando `hello`, forneceu um ID aleatório pro container `438cc24de1c1` e também um nome aleatório `trusting_noyce`. Depois de terminar a execução do script principal, saiu da imagem. É o comportamento padrão.

Por um segundo imperceptível seu terminal ficou travado enquanto a imagem era executada e depois foi liberado.

Além disso, este container está alocado em nossa memória, sendo assim, para limpá-lo, temos que executar o comando: `docker rm 438cc24de1c1`.

E da próxima vez passar a flag `--rm` para que o mesmo seja removido automaticamente após a execução: `docker run --rm hello-world`.

### Pontos mal explicados até o momento

#### Como vejo as imagens que já baixei?

Com o comando: `docker images`

#### Como apago imagens baixadas?

Você pode passar o ID (hash) com o comando: `docker rmi bf756fb1ae65`  
Apagar múltiplas imagens soltas: `docker rmi $(docker images -f dangling=true -q)`  
Apagar baseado em tempo, por exemplo, últimas 24h: `docker image prune –a ––filter "until=24h"`  
Apagar imagens rotuladas como *old* pelo Docker: `docker image prune ––filter="label=old"`

#### É possível dar um nome para o container?

Sim, é possível e bem simples, basta passar o parâmetro `--name` : `docker run --name bob_esponja hello-world`

#### Como apagar containers com status de exited?

Você pode passar o `name` com o comando: `docker rm bob_esponja`
Utilizar o ID (hash) com o comando: `docker rm 438cc24de1c1`
Apagar múltiplos container rodando o comando: `docker rm -v $(docker ps -a -q -f status=exited)`

#### De onde saiu o comando `hello`?

Pois é, esse comando veio do arquivo `Dockerfile`.  
O **Dockerfile** é um arquivo que comumente vai na raiz de nosso projeto e permite que construamos nossas próprias imagens e a utilizemos como base para os containers.
Ao final dele é específicado um comando, e no nosso caso é: `CMD ["./amd64/hello-world/hello"]`.

Estranhamente, nessa imagem em específico do `hello-world`, temos um [Dockerfile.build](https://github.com/docker-library/hello-world/blob/master/Dockerfile.build) ao invés de `Dockerfile`. Não achei menção na documentação, no entanto, clonei o repositório, renomeei-o para somente `Dockerfile`, rodei `docker build .` - para construir a imagem e indicar que o Dockerfile está na pasta raiz - e funcionou. Talvez houvesse um caminho melhor 🤔

#### Cada vez que executo uma imagem é gerado um novo container?

Sim, isso é verdade. Se você executar a imagem `hello-world` duas vezes com `docker run hello-world` e for conferir com `docker ps -a` haverão duas instâncias.

Para reutilizar um container, é indicado nomeá-lo, como fizemos com o `bob_esponja` e, depois poderá rodar o comando: `docker start --attach bob_esponja`.

## Pausa

Respire, estique as pernas, se hidrate e [vamos para a parte 2](/docker-guia-de-sobrevivencia-parte-2), explorar pontos como:

- Manter um container em execução;
- Entrar num container em execução e realizar comandos;
- Parar containers em execução;
- Explorando o Dockerfile e docker-compose.yml

## Referências:

- [docs.docker.com](https://docs.docker.com/)
- [Docker – Clean Up After Yourself!](https://dzone.com/articles/docker-clean-after-yourself)
- [Why docker container exits immediately](https://stackoverflow.com/questions/28212380/why-docker-container-exits-immediately#:~:text=15%20Answers&text=A%20docker%20container%20exits%20when%20its%20main%20process%20finishes.&text=I%20don't%20know%20enough,supervisord%20to%20run%20the%20processes.)
- [How To Create Docker Image With Dockerfile](https://phoenixnap.com/kb/create-docker-images-with-dockerfile)
- [Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Docker Tutorial: Get Going From Scratch](https://stackify.com/docker-tutorial/)
- [Docker: Criando containers sem dor de cabeça](https://www.alura.com.br/curso-online-docker-e-docker-compose)
