import React from 'react';
import { BannerIllustration } from 'components/UI';
import { BannerProps } from './types';
import { theme } from 'styles';
import * as S from './styles';

const Banner = ({ paddingTop = '0' }: BannerProps) => {
  const { main } = theme;

  return (
    <S.Banner data-testid="FX_BANNER">
      <S.BannerWrapper theme={main} paddingTop={paddingTop}>
        <S.BannerContainer>
          <S.FirstColumn>
            <S.PreTitle>
              <em>— felipexperto</em>, vulgo:
            </S.PreTitle>
            <S.Title>Felipe Marciano</S.Title>
            <S.Description>
              front-end developer, cuja rotina inclui codificar, escrever, lavar
              louça e acariciar cachorros
            </S.Description>
          </S.FirstColumn>
          <S.SecondColumn>
            <BannerIllustration />
          </S.SecondColumn>
        </S.BannerContainer>
      </S.BannerWrapper>
    </S.Banner>
  );
};

export default Banner;
