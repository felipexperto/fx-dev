---
authorid: 1
category: Dev
title: "Chrome: Ignorar CORS e HTTPS em Ambiente Local"
date: "2025-04-25T00:00:00.000Z"
description: "Erros de CORS, insecure site e self-signed certificate, quem nunca, não é mesmo?"
---

Um problema comum que temos quando desenvolvendo localmente são erros voltados pra CORS e Insecure site.  

Hoje o post é sucinto e a proposta é simples: apresentar um comando para rodar uma instância limpa do Google Chrome usando qualquer terminal e com flags que resolvem esses dois problemas. Evitando que você tenha que desabilitar no seu navegador padrão, abrindo margem pra uma quebra de segurança.


## O comando

Execute o comando abaixo, uma instância do Google Chrome será aberta automaticamente e seu terminal ficará "travado" nos logs dessa instância.  
Para encerrar a execução basta fechar o Google Chrome ou utilizar `Ctrl+C` no Terminal.

```bash
google-chrome \
  --disable-web-security \
  --user-data-dir='tmp' \
  --ignore-certificate-errors \
  --allow-insecure-localhost \
  --unsafely-treat-insecure-origin-as-secure='https://localhost'
```


## Analisando flag por flag

### `--disable-web-security`  
Desativa as políticas de segurança do navegador, CORS (Cross-Origin Resource Sharing) e SOP (Same-Origin Policy). Isso permite que façamos chamadas para APIs em outros domínios.

### `--user-data-dir='tmp'`  
Essa flag cria um diretório chamado `tmp` no local que você executou o comando. Isso evita que o Chrome use o diretório do perfil padrão, onde seus dados de navegação, extensões e cookies estão. Em outras palavras, essa flag é que garante um perfil novo em folha. 

O diretório não é apagado automaticamente ao encerrar o navegador, você tem que apagá-lo manualmente. Caso você execute o comando no diretório do seu projeto e utilize git pra versionar, aconselho adicionar a pasta `tmp` no arquivo `.gitignore`.

### `--ignore-certificate-errors` e `--allow-insecure-localhost`  
Essas flag respectivamente funcionam para: ignorar erros de certificados HTTPS inválidos ou autoassinados e tratar localhost como um host seguro, mesmo com um certificado inválido (como um self-signed certificate). 

Caso você tenha problemas de certificado, pode começar utilizando somente `--allow-insecure-localhost` (que limita a localhost) e se não funcionar, partir para `--ignore-certificate-errors` que cobre inclusive domínios externos. Adicionei ambas as flags no comando pois pra mim é o que funcionou.

### `--unsafely-treat-insecure-origin-as-secure='https://localhost'`  
Diz ao Chrome para tratar uma origem que não é segura (HTTP ou HTTPS com certificado inválido) como se fosse segura. A "origem" aqui é o conjunto de protocolo + domínio + porta. Isso permite que funcionalidades restritas a contextos "seguros" (como acesso ao microfone, câmera, ServiceWorker, clipboard, WebAuthn, etc.) funcionem em ambientes inseguros como o localhost.

## Facilitando a execução no Linux e Mac

Tudo acima foi testado no Linux e no Mac, cuja base é Unix. E, se você não quer deixar esse comando num bloco de notas qualquer ou essa página favoritada, minhas ideias são:

- Criar um alias no seu terminal e executar com um único comando;
- Criar um arquivo `.sh` e executar quando precisar;

Se você não sabe como fazer isso, converse com a IA de sua preferência. São procedimentos básicos e ela saberá orientar.

## Executando no Windows

Se você utiliza Windows e WSL (Subsistema do Windows para Linux) provavelmente funciona também. Caso contrário, segundo minhas pesquisas, é possível configurar um atalho customizado com essas flags no `.lnk`.
