import React from 'react';
import { Link } from "gatsby";

import Logo from 'src/images/logo-felipexperto.inline.svg';
import { theme } from 'styles'
import * as S from './styles.js';

const Header = ({ location, title }) => {
  const { main } = theme;
  
  return (
    <S.Header data-testid="FX_HEADER">
      <S.HeaderWrapper theme={main}>
        <S.HeaderContainer>
          <Link to={`/`} title={title}>
            <Logo data-logo/>
          </Link>
        </S.HeaderContainer>
      </S.HeaderWrapper>
      <S.HeaderBottomSpace />
    </S.Header>
  )
}

export default Header;