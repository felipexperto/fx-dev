import React, { useEffect, useState } from 'react';
import { Link } from "gatsby";

import { useWindowScroll } from 'src/hooks';
import { isHome } from 'src/utils/helpers';
import Logo from 'src/images/logo-felipexperto.inline.svg';
import { theme } from 'styles'
import * as S from './styles.js';

const Header = ({ height, title }) => {
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
      <S.HeaderWrapper theme={main} isScrolling={isScrolling} height={height}>
        <S.HeaderContainer>
          <Link to={`/`} title={title}>
            <Logo data-logo/>
          </Link>
        </S.HeaderContainer>
      </S.HeaderWrapper>
    {!isHome() && <S.HeaderBottomSpace height={height}/> }
    </S.Header>
  )
}

export default Header;