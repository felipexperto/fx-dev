import React from 'react';

import * as S from './styles';

const Footer = () => (
  <S.footerWrapper>
    © {new Date().getFullYear()}, Construído com
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a> <S.emojiWrapper>❤</S.emojiWrapper>
  </S.footerWrapper>
)

export default Footer;