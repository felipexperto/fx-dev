import React, { useEffect, useState } from 'react';
import { Link } from "gatsby";

import { useWindowScroll } from 'src/hooks';
import Logo from 'src/images/logo-felipexperto.inline.svg';
import { theme } from 'styles'
import * as S from './styles.js';

const Header = ({ location, title }) => {
  const { main } = theme;
  const { scroll } = useWindowScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      const handleSearchScroll = () => {
        return scroll.y > 5
          ? setIsScrolling(true)
          : setIsScrolling(false);
      };
      handleSearchScroll();
    }
    
    return () => (unmounted = true);
  }, [scroll]);

  return (
    <S.Header data-testid="FX_HEADER">
      <S.HeaderWrapper theme={main} isScrolling={isScrolling}>
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