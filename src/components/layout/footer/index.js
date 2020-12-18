import React from 'react';

import GetAuthorInfo from 'src/services/authors';
import SocialList from "src/components/UI/SocialList";
import * as S from './styles';

const Footer = () => {
  const { authorSocial } = GetAuthorInfo(1);

  return (
    <S.footerWrapper>
      <S.footerContainer>
        <S.firstRow>
          <S.presentationColumn>
            <S.presentationTitle>Tem perguntas,</S.presentationTitle>
            <S.presentationTitle>fale comigo.</S.presentationTitle>
            <S.presentationSubtitle>Respondo assim que puder.</S.presentationSubtitle>
          </S.presentationColumn>
          <S.infosColumn>
            <div>
              <S.infosLabel>
                Para mandar um "Oi"
                {` `}
                <span aria-label="Emoji de mão acenando" role="img">👋</span>
                </S.infosLabel>
              <S.infosEmail>felipexperto@gmail.com</S.infosEmail>
            </div>
            <div>
              <S.infosLabel margin={'2rem 0 .5rem  0'}>
                Me siga no LinkedIn
                {` `}
                <span aria-label="Emoji de foguete" role="img">🚀</span>
                </S.infosLabel>
              <S.infosLink
                href="https://www.linkedin.com/in/felipexperto/"
                rel="noreferrer"
                target="_blank"
              >
                linkedin.com/in/felipexperto/
              </S.infosLink>
            </div>
          </S.infosColumn>
        </S.firstRow>
        <S.secondRow>
          <S.copyrightColumn>
            © {new Date().getFullYear()}, Construído com
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            {` `}
            <S.emojiWrapper aria-label="Emoji de coração" role="img">❤</S.emojiWrapper>
          </S.copyrightColumn>
          <S.socialColumn>
            <SocialList networkArr={authorSocial} colorSchemeReverse={true} />
          </S.socialColumn>
        </S.secondRow>
      </S.footerContainer>
    </S.footerWrapper>
  );
}

export default Footer;