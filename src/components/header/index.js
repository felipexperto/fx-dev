import React, { useEffect, useState } from 'react';
import { Link } from "gatsby";

import { theme } from 'styles'
import * as S from './styles.js';

const Header = ({ location, title }) => {
  const { main } = theme;
  
  return (
    <S.Header data-testid="FX_HEADER">
      <S.HeaderWrapper theme={main}>
        <S.HeaderContainer>
          <Link to={`/`}>{title}</Link>
        </S.HeaderContainer>
      </S.HeaderWrapper>
      <S.HeaderBottomSpace />
    </S.Header>
  )
}

export default Header;