---
authorid: 1
category: Dev
title: "Acessibilidade no Frontend - Introdução"
date: "2022-01-11T22:00:00.000Z"
description: "Introdução rápida de acessibilidade no front, do conceito à prática"
tldr: ''
---

Olá, pessoa! Tudo bem?

Sem muita enrolação, vamos conversar sobre acessibilidade. Muitas vezes esse assunto envolve documentações extensas e cansativas, então noosa intenção é sermos práticos pra que você não durma ou feche a aba. 

Só pra deixar claro, o objetivo audacioso deste post é dar uma introdução conceitual e apresentar práticas aplicáveis no dia a dia para que você finalize essa leitura sabendo identificar falhas básicas de acessibilidade e como corrigi-las.

## O que é acessibilidade?

A descrição mais concisa que pude encontrar foi:

> Oferecer possibilidades de transpor as barreiras que existem na nossa sociedade, garantindo que todas as pessoas possam participar dos diversos âmbitos sociais.

No nosso caso, como frontends, tratamos de acessibilidade na web, afinal, o âmbito é estritamente digital pois o produto do nosso trabalho são aplicativos e sites.

Se você for pesquisar, também é possível encontrar bastante conteúdo sobre acessibilidade como `a11y` existe até um projeto opensource que leva a sigla no nome, chamado [The A11y Project](https://www.a11yproject.com/) e, que possui diversos conteúdos, tanto para designers, quanto desenvolvedores, Product Managers, enfim, se despertou sua curiosidade dê uma olhada depois (vale a pena).

## Quem define as diretrizes

Falando de um ponto de vista mais técnico, se temos diretrizes, quem as define?

É a famosa W3C (`World Wide Web Consortium`), um consórcio que regulamenta os padrões para web e, que fazem homologação desde tags HTML até protocolos.

Em outras palavras, eles são incumbidos de escrever a WCAG (`Web Content Accessibility Guidelines`) que é um conjunto de diretrizes sobre acessibilidade.

## Princípios da WCAG 2.1

Atualmente a WCAG encontra-se em sua versão 2.1 e tudo que é escrito nela é baseado em 4 princípios: Perceptível, Operável, Compreensível e Robusto. 

Ao invés de trazer o que cada um desses tópicos significa e acabarmos numa conversa abstrata, dei uma lida geral e concatenei 12 recomendações que eles publicaram em 2018 em pequenos textos que na minha opinião refletem o que temos que entregar para o usuário final para que consigamos nos adaptar a cada um dos tópicos:

### Perceptível

- Layout responsivo e contrastante: Podemos assumir que metade do trabalho é com o front e a outra com os designers. Afinal, no front temos que tomar os devidos cuidados para entregar o layout responsivo e a questão de contraste tanto relacionada a cor quanto tamanho da tipografia ou seu peso deve ser avaliada pelos designers.

- Informações em várias mídias (texto, áudio, vídeo): Sabe aquele blog que você visita e tem um player onde é possível ouvir o conteúdo da matéria, então, o foco não é pra quem tem pressa ou preguiça e sim para aqueles que possuem dificuldades de leitura. Nós também podemos encontrar vídeos, muito comuns em blogs de reviews, a ideia é a mesma.

- De fácil entendimento: Na área de Design, falando especificadamente de UX Design, existe um profissional chamado UX Writer cujo um dos trabalhos é identificar a dificuldade das pessoas lerem um texto e compreenderem. Em outras palavras, eles tem um conjunto de regras para avaliar a complexidade de textos. Isso serve muito para interface, por exemplo: Imagine quantos perfis de pessoas com diferentes dispositivos lidam com a interface do aplicativo de um banco e você precisa que a proposta se encaixe para todos eles. 

### Operável

- Conteúdo acessível por teclado: Que seja possível interagir com todos os elementos da página utilizando o teclado, que esses elementos siga uma ordem intuitiva e  esteja claro para o usuário o elemento que está focado.

- Facilmente navegável: Imagine um mega menu, se você repetidamente pressiona `TAB`, entra nas opções e não consegue sair, é um problema. Então cabe a nós elaborar uma estratégia para que as pessoas consigam acessar esse menu diretamente ou o conteúdo principal, por exemplo.

- Se o conteúdo for animado, que o intervalo de tempo seja razoável e as animações suaves: Um slider que passa muito rápido e ninguém consegue ler não é muito útil não é mesmo? Além disso, dependendo da velocidade algumas pessoas podem experimentar desde um mal estar até crises epilépticas.

### Compreensível

- Conteúdo legível e comportamento previsível: Se você aplica o mesmo botão em duas telas diferentes, ele precisa exercer a mesma função. Por exemplo, se ele abre uma nova aba num lugar e abre um modal em outro, se torna confuso para o usuário.

- Ajude o usuário a corrigir erros: Imagine um formulário onde você erra e nenhum campo tem contornos em vermelho, as mensagens de erro não estão próximas dos campos correspondentes e você precisa ir e voltar, para cima e para baixo, o tempo todo. Tendo que enviar duas ou três vezes pela falta de feedback. Frustrante, não? Pois é.

### Robusto

- Maximizar a compatibilidade com atuais e futuros agentes de usuário, incluindo tecnologias assistivas: O tópico é bem auto-explicativo, no entanto, para ficar claro, quando falamos *agentes de usuário* significa todos os navegadores em todos os dispositivos.

## Critérios de Sucesso

Para cada diretriz, são fornecidos critérios de sucesso testáveis, a fim de atender as necessidades dos diferentes grupos e situações, são definidos três níveis de conformidade:

- A: Requisito **precisam** ser satisfeitos para ser possível acessar o conteúdo;
- AA: Requisitos **devem** ser satisfeitos senão usuários terão dificuldades para acessar o conteúdo;
- AAA: Requisitos **podem** ser satisfeitos e facilitará o acesso ao conteúdo;

## Selo de acessibilidade digital

Falamos muito sobre diretrizes e critérios até agora mas alguém vai validar isso pra você? Pode. Se você quiser.

Existe um processo de análise realizado pela Comissão Permanente de Acessibilidade onde você pode obter um selo de site acessível caso esteja dentro dos parâmetros necessários.

De maneira simplificada, as etapas do processo são:

- Cadastro, envio dos documentos e indicação de 20 páginas para avaliação com no mínimo 95% de aderência no [AsesWeb](https://asesweb.governoeletronico.gov.br/);
- Cada página submetida passa por teste de avaliação manual por especialistas (pessoas com deficiência visual);
- Com base no parecer técnico, a CPA vai deliberar sobre a concessão do Selo de AD;
- Deferida a concessão, o Selo de AD será emitido pela Imprensa Oficial do Estado;
- E um robô acessa a base de dados das URLs certificadas para reavaliação constante.

Para saber mais sobre as etapas você pode conferir este vídeo: [Selo de Acessibilidade Digital](https://www.youtube.com/watch?v=mZOAGOMyc0Y).

## Acessibilidade dos sites brasileiros

Falando um pouco sobre estatísticas, vamos ver como andam os números de 2019 e 2020 com base nos 14.5 milhões de endereços .br:

2019
- Sites sem problemas: 0,61%;
- Com pelo menos um problema: 99,39%.

2020
- Sites sem problemas: 0,74%;
- Com pelo menos um problema: 99,26%.

Não temos sequer 1% ainda e quando falamos por setores, como fica essa divisão?

Os setores menos acessíveis são blogs (98,76%), e-commerce (98,70%), corporativos (97,19%), notícias (96,97%) e educacionais (96,12%).

Sendo que os principais erros incluem problemas com formulários e somam 55,19% das falhas dos sites, problemas nos links chegam a 93,65%, mais de 83% tem problemas de acessibilidade com imagens, 30% com frames e 97% dos sites apresentaram algum problema no teste do W3C.

## Vamos falar menos de sites e mais de pessoas

> A cada 5 segundos, uma pessoa fica cega no mundo.

Esse dado foi retirado do World Report on Disability 2010 e do Vision 2020 segundo a [Fundação Dorina](https://fundacaodorina.org.br/a-fundacao/deficiencia-visual/estatisticas-da-deficiencia-visual/#:~:text=Segundo%20dados%20do%20World%20Report,visual%20poder%C3%A1%20dobrar%20no%20mundo.).

Por si só é um número assustador mas te convido a ir além e visitar o site [Stories of Web Users](https://www.w3.org/WAI/people-use-web/user-stories/#shopper) onde casos comuns foram documentados para evidenciar as barreiras de acessibilidade e os benefícios de sites acessíveis.

De uma maneira mais leve o movimento Web Para Todos também abordou o assunto com o vídeo [Como marcar um date na web (sendo cego) | Campanha Movimento Web para Todos](https://www.youtube.com/watch?v=vJ3brczs1rc), são 30 segundos só e vale a pena. O ator escolhido é o Gustavo [@torniero](https://twitter.com/torniero), jornalista e ativista pelos direitos das pessoas com deficiência.

### Falando um pouco sobre o Brasil

Segundo a ONU, há 1 bilhão de pessoas com algum tipo de deficiência no mundo. Em outras palavras, a cada 7 pessoas 1 tem alguma deficiência.

De acordo com o Censo de 2010, 46 milhões de brasileiros possuem certo grau de dificuldade, seja para enxergar, ouvir, caminhar, subir degraus, deficiência mental/intelectual.

Dentre as pessoas com dificuldades parcial ou total nas habilidades para enxergar, caminhar, ouvir ou subir degraus, há mais de 12.5 milhões de brasileiros, o que corresponde a 6,7% da população.

### Permanente versus Temporário

Os números citados são grandes e nós sequer estamos englobando o cenário do *Permanente versus Temporário*, o que isso quer dizer?

Imagine um personagem chamado Pedro, ele nasceu sem o braço direito, ele está dentro daquela estatística. Agora temos dois novos personagens, o Ricardo e a Marina. Ricardo quebrou o braço direito em um acidente de moto e Marina teve uma filha recentemente e como trabalha de home office, frequentemente está com a criança num braço e o mouse no outro.

Neste cenário eles dividem a mesma dor pois sofrem as mesmas dificuldades.

## Por que devemos pensar em acessibilidade?

Se chegamos até aqui e ainda não ficou clara a resposta para essa pergunta, vamos analisar os tópicos abaixo:

- Contribuição para uma sociedade mais justa e inclusiva;
- Podemos impactar positivamente a vida de alguém fazendo produtos inclusivos e fáceis de utilizar, ou seja, independente da dificuldade que esta pessoa tenha, ela se sente capaz de entrar em um site, comprar um produto e sem pedir a ajuda de ninguém;
- Boa acessibilidade leva a uma boa experiência de usuário, pois se você está englobando pessoas que tenham algum tipo de dificuldade, aqueles que não tem foram contemplados também;
- Estratégica de negócios:
  - Amplia o mercado;
  - Pode ser usado como um diferencial;
- E por fim, é lei. Lei Brasileira de Inclusão (LBI) - Obrigatória a acessibilidade para páginas web e site de qualquer organização (empresas privadas, fundações e institutos, órgãos do governo) com sede ou representação comercial em território brasileiro. Lei 13.146 art.63 julho de 2015.

## Fazendo diagnóstico de páginas

### Preparação

Antes de mais nada, você precisa saber o que está procurando. Você se lembra que vimos os principais problemas de acessibilidade e eram pontos básicos de navegação?

Sendo assim, aconselho duas séries de vídeos, a primeira é chamada: [a11y casts playlist](https://www.youtube.com/playlist?list=PL7Bjl0Cb4SboBHNihVBRd-AdctfXcmClc) criada pelo Google Chrome Developers, que abordará assuntos como: O que é *focus*? Controlando o foco; Basta usar um botão; Tabindex; Leitores de Tela (VoiceOver, NVDA); Atributo ARIA, entre outros.

E a segunda playlist é chamada [Quick accessibility test playlist](https://www.youtube.com/watch?v=ahDuaWKSGZA&list=PLTqm2yVMMUKWTr9XWdW5hJ9tk512Ow0SE&index=1) com vídeos de em média 1 minuto onde você aprende a fazer testes rápidos manuais e não precisará de nada além do teclado e mouse. Alguns assuntos abordados são: Navegação com teclado, Redimensionamento da janela e zoom, Alto Contraste, entre outros.

> Mas eu não preciso estudar isso! As ferramentas e snippets de código me dirão o que fazer.

É mesmo? Vamos olhar o snippet de código abaixo e você me diz o que tem de errado. Vou adiantar que é um trecho de código em Javascript que ao ser executado no `Console` do `Google Chrome Devtools` adiciona bordas vermelhas a todas as imagens que não possuem atributo `alt` ou que ele esteja vazio.

```
(() => {
    const imagesWithoutAlt = document.querySelectorAll('img[alt=""], img:not([alt])');
    imagesWithoutAlt.forEach(item => item.style.outline = "solid 10px red");
})();
```

Já entendeu? Não? A questão é que o atributo `alt` vazio não é um erro, ele indica uma imagem decorativa, ou seja, que não tem conteúdo relevante para ser descrita. 

Meu ponto é: As ferramentas e snippets podem auxiliar muito na jornada mas sem entendimento dos conceitos para tomar suas decisões, elas podem induzir ao caminho errado. Dito isso, vamos ao próximo tópico!

### Ferramentas

Avançando para ferramentas de diagnóstico, as duas primeiras ferramentas são: 

- Google Chrome Lighthouse;
- Firefox Accessibility Inspector.

Resolvi citá-las primeiro porque provavelmente você tem esses dois navegadores instalados e deve aproveitar os recursos antes de sair caçando soluções mirabolantes. Aconselho o vídeo [Understand Website Accessibility with the Firefox Accessibility Inspector](https://www.youtube.com/watch?v=7mqqgIxX_NU) postado no canal [Mozilla Developer](https://www.youtube.com/channel/UCh5UlGiu9d6LegIeUCW4N1w) onde Jen Simmons ([@jensimmons](https://twitter.com/jensimmons), designer, desenvolvedora, educadora e palestrante) explica sobre o *Accessibility Inspector*.

Agora vamos avançar para Bookmarklets, que nada mais são do que scripts favoritáveis no navegador que executam funções em Javascript no site e, no nosso caso, relacionadas a acessibilidade:

- [ANDI - Accessibility Testing Tool](https://www.ssa.gov/accessibility/andi/help/install.html): Ferramenta intuitiva tudo-em-um, site com explicações detalhadas e até GIF para explicar o funcionamento;
- [Bookmarklets for Accessibility Testing](https://www.pauljadam.com/bookmarklets/): Scripts separados, mais sucintos e site menos documentado;

Partindo para ferramentas robustas de terceiros indico as duas abaixo que analisam seu site em produção e geram reports completos com acertos, erros e pontos a serem conferidos manualmente:

- [accessMonitor](https://accessmonitor.acessibilidade.gov.pt/): Validador de práticas de acessibilidade Web baseado na WCAG 2.1 do governo de Portugal;
- [Wave: Web Accessibility Evaluation Tool](https://wave.webaim.org/): Suíte de ferramentas de avaliação de conteúdo web acessível disponível por site ou extensão dos navegadores Firefox e Chrome;

Lembrando que existe uma variedade de ferramentas e você tem liberdade para escolher a que melhor se encaixa no seu contexto. Vou deixar mais este link interessante com 25 ferramentas de teste: [Top 25 Awesome Accessibility Testing Tools for Websites](https://dynomapper.com/blog/27-accessibility-testing/246-top-25-awesome-accessibility-testing-tools-for-websites).

## Conclusão

- Se dedique aos estudos de acessibilidade mas não desenvolva uma obsessão pela sua solução atender 100% dos casos;

- Sempre tenha empatia e disposição a ouvir;

- Lembre-se que não se muda tudo de uma vez, seja paciente;

- Descubra as opções de acessibilidade dos seus dispositivos;

- Familiarize-se com leitores de tela: [VoiceOver](https://support.apple.com/pt-br/guide/voiceover/welcome/mac) da Apple, [NVDA](https://www.nvaccess.org/download/) disponível para Window 7 ou superior e, o [Orca](https://help.gnome.org/users/orca/stable/introduction.html.pt_BR) em distribuições Linux;

- Estude HTML semântico que é a linguagem universal de todos os dispositivos que acessam a web e provêm descrição e significado ao conteúdo. Em outras palavras, entenda a estrutura de uma página simples criada utilizando corretamente tags como: `header`, `footer`, `main`, `article`, `section`, `nav`, `menu`; pesquise sobre tags de imagem: `img`, `alt`, `figure`, `figcaption`, `picture`; tags voltadas a formatar conteúdo: `abbr`, `em`, `kbd`, `strong`, `wbr`;

- Construa sua biblioteca de referências para ter suporte na hora de desenvolver do zero ou analisar um código. Dois bons exemplos são a [Vox Accessibility Guidelines](https://accessibility.voxmedia.com/) e o [guia WCAG](https://guia-wcag.com/) de Marcelo Sales ([@msales](https://twitter.com/msales/), especialista em acessibilidade digital).

- E, por último mas não menos importante, compartilhe o que você aprendeu 😊

## Referências

- [Apenas 0,74% dos sites brasileiros são completamente acessíveis](https://itforum.com.br/noticias/apenas-074-dos-sites-brasileiros-sao-completamente-acessiveis/)
- [Conceito de Acessibilidade - Instituto Federal Rio Grande do Sul](https://cta.ifrs.edu.br/acessibilidade-digital/conceito/)
- [Pessoas com deficiência e acessibilidade na web](https://victorhermes.medium.com/pessoas-com-deficiencia-e-acessibilidade-na-web-e5eb73ba87f2)
- [O que é deficiência visual](https://novaescola.org.br/conteudo/270/deficiencia-visual-inclusao)
- [Estatísticas da deficiência visual](https://fundacaodorina.org.br/a-fundacao/deficiencia-visual/estatisticas-da-deficiencia-visual)
- [Accessibility tools for designers and developers - UX Collective](https://uxdesign.cc/accessibility-tools-for-designers-and-developers-ea400a415c0a)
- [Web Accessibility for Newbies](https://levelup.gitconnected.com/web-accessibility-for-newbies-1098fa15f9f0)
- [O que é WCAG? Acessibilidade para conteúdo Web](https://ayltoninacio.com.br/blog/o-que-e-wcag-acessibilidade-na-web)
- [4 princípios básicos W3C Acessibilidade](http://comcursando.blogspot.com/2015/12/4-principios-basicos-w3c-acessibildiade.html)
- [Microsoft Inclusive Design](https://www.microsoft.com/design/inclusive/)
- [Configurando ambiente GNOME para auxiliar PCDs (Diolinux)](https://youtu.be/6lQR3xYewRw?t=429)
- [Movimento Web para todos](https://mwpt.com.br/)
- [Curso de Acessibilidade Digital e Comunicacional da Secretaria Municipal da Pessoa com Deficiência](https://www.prefeitura.sp.gov.br/cidade/secretarias/pessoa_com_deficiencia/cpa/index.php?p=12009)










