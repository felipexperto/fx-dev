import React from 'react';

import * as S from './styles.js';

const NotFoundPageContent = () => {
  return (
    <S.ContainerForFewContentPage>
      <S.TitleInlineStyle>Oops!</S.TitleInlineStyle>
      <S.Subtitle>Essa página não foi encontrada.</S.Subtitle>
      <S.Anchor href="/">Clique aqui e volte para a página principal.</S.Anchor>
    </S.ContainerForFewContentPage>
  );
};

export default NotFoundPageContent;
