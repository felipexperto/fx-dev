---
authorid: 1
category: Dev
title: "Redis Cheatsheet"
date: "2022-10-04T14:43:00.284Z"
description: "Redis Cheatsheet"
tldr: ""
---


## Primeiros passos

### Iniciar o Redis no Linux
```shell
sudo /etc/init.d/redis-server start
```

### Acessar linha de comando
```shell
redis-cli
```

### Sair da linha de comando
```shell
exit
```

### Matar instância do Redis Server
Caso o #subject/redis diga que uma porta está ocupada, para matar o processo com PID, use o comando abaixo:
```shell
sudo kill -9 sudo lsof -t -i:PID
```

Para descobrir o **PID** do processo do **redis-server** rodando:
```shell
ps axo pid,comm | grep redis-server
```

Matando o processo em seguida:
```shell
sudo kill -9 PID
```

Depois subindo-o novamente:
```shell
redis-server
```

Subindo uma segunda instância numa porta específica
```shell
redis-server --port 6380
```


## Lista de comandos
### SET - Adicionar uma informação no Redis
Armazena a chave e seu respectivo valor. Caso já exista uma chave definida, seu valor é sobrescrito.
Variações: `MSET`, `HMSET`.

```
SET :resultado:2022-09-19:megasena '2, 21, 30, 35, 45, 50'
```

### APPEND - Adicionar valor a uma chave existente
Adiciona o valor a uma chave existente, ou cria uma nova chave (caso esta ainda não exista) com seu respectivo valor.

```
APPEND :resultado:2021-08-19:megasena '3, 13, 22, 34, 59, 60'
```

### KEYS - Ver todas informações no Redis
O Redis possui um comando chamado KEYS , que é usado para fazer buscar de chaves com base em um determinado padrão (pattern) que é passado como parâmetro para o comando.

```
KEYS *
KEYS :resultado:*-*-19:megasena
KEYS :resultado:2021-*-*:megasena
```

### GET - Retornar valor
Retorna o valor correspondente à chave informada.
Variações: `GETRANGE`, `MGET`, `HMGET`.

```
GET :resultado:2021-08-19:megasena // "3, 13, 22, 34, 59, 60"
```

### STRLEN
O comando `STRLEN` retorna o tamanho do valor associado a uma chave que ele recebe como parâmetro.

```
STRLEN :resultado:2021-08-19:megasena // (integer) 21
```

### DEL
Remove a(s) chave(s) informada(s) e seu(s) respectivo(s) valor(es).

```
DEL :resultado:2021-08-19:megasena
```

### TTL
Quando o comando TTL retorna -1, significa que a chave não possui um tempo de expiração. Caso o comando tivesse retornado o número -2, significaria que a chave não existisse no Redis.
Variações: `PTTL`.

```
TTL :resultado:2022-09-19:megasena // -1
```

### EXPIRE
O comando EXPIRE retorna 1 quando a definição foi realizada ou 0 caso a chave não exista ou o tempo especificado não possa ser definido.
Variações: `PEXPIRE`.

```
EXPIRE :resultado:2022-09-19:megasena 3600
```

### PERSIST
O comando `PERSIST` remove um tempo de expiração para uma chave.

```
PERSIST :resultado:2022-09-19:megasena
```

