import React from 'react';
import { string } from 'prop-types';
import Austronaut from 'images/banner/astronaut-pool.inline.svg';

import { theme } from 'styles';
import * as S from './styles.js';

const Banner = ({ paddingTop }) => {
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
            <Austronaut />
          </S.SecondColumn>
        </S.BannerContainer>
      </S.BannerWrapper>
    </S.Banner>
  );
};

Banner.defaultProps = {
  paddingTop: '0',
};

Banner.propTypes = {
  paddingTop: string,
};

export default Banner;
