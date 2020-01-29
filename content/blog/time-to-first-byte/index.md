---
authorid: 1
title: Time To First Byte
date: "2020-01-05T00:35:00.284Z"
description: "O que é Time To First Byte? Como medir? Por que se importar?"
---

Time To First Byte ou TTFB, é uma medida que indica a duração entre uma requisição HTTP e o momento que o browser inicia o recebimento desta resposta, ou seja, recebe o primeiro byte. Em outras palavras, é o tempo gasto a partir da requisição do nosso dispositivo até chegar no servidor e voltar carregando o primeiro byte de informação.

> "O tempo de resposta do servidor mede quanto tempo ele leva para carregar o HTML necessário para começar a processar a página de seu servidor, subtraindo o tempo de latência de rede entre o Google e seu servidor." - [Google](https://developers.google.com/speed/docs/insights/Server)

De acordo com o Google, o tempo de resposta aceitável deveria ser de 200 milisegundos ou menos.

## Como frontend, por que você deveria se importar com isso?

É real que o frontend normalmente não tem poder para resolver esta situação uma vez que depende de infraestrutura da empresa que está hospedando o site. Se está num servidor compartilhado ou dedicado, a quantidade e velocidade de disco e memória RAM disponíveis, utilização de um serviço de CDN para cachear arquivos, enfim...

Porém, nós temos que ficar sempre alertas porque todo o trabalho de minificar css/js/imagens, usar gzip, diminuir requests, otimizar o bundle, remover CSS e JS blocantes, carregar arquivos de maneira assíncrona, atrasar a execução de scripts não tão importantes - e por aí vai -, pode ir pro lixo uma vez que o TTFB está muito alto e causando má impressão no usuário que acessa sua página. E além disso, o TTFB é uma das métricas levadas em consideração pelo Google para rankeamento.

## O que pode impactar o TTFB?

Três ações podem impactar:

1. O envio da requisição pela máquina do cliente ao servidor;  
Performance do DNS lookup, velocidade da internet do usuário, distância do servidor ou interrupções na conexão.

2. O processamento do servidor e geração da resposta e;  
Processamento de scripts(uso de disco e memória RAM), chamadas a base de dados e comunicação com outros sistemas.

3. O envio da resposta do servidor ao cliente.  
Autoexplicativo.


## Como medir o Time To First Byte?

Você pode utilizar alguma das inúmeras ferramentas de performance disponiveis na web, sendo que aconselho o [Webpagetest](https://www.webpagetest.org/) e o  console do Google Chrome, [você pode aprender o processo clicando aqui e acessando o tutorial do Google](https://developers.google.com/web/tools/chrome-devtools/network/resource-loading).


## Curiosidade

A Cloudfare diz ter realizado testes extensivos utilizando nginx enquanto investigava sobre TTFB e uma diferença significante foi notada quando a compressão é ou não ativada. O gzip reduz o tempo de download das páginas porém tem um custo, aumenta o TTFB. Isso acontece porque o nginx espera até que a compressão tenha iniciado antes de enviar os cabeçalhos HTTP e quando a compressão está desabilitada envia de uma vez.

## Referências

- https://blog.stackpath.com/time-to-first-byte/
- https://en.wikipedia.org/wiki/Time_to_first_byte
- https://developers.google.com/speed/docs/insights/Server
- https://blog.cloudflare.com/ttfb-time-to-first-byte-considered-meaningles/
- https://developers.google.com/web/tools/chrome-devtools/network/resource-loading
- https://csswizardry.com/2019/08/time-to-first-byte-what-it-is-and-why-it-matters/


*[TTFB]: Time to First Byte
*[DNS lookup]: Processo de encontrar o endereço IP de qualquer url na internet