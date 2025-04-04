import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { EffectCallback } from './types';

import { useWindowScroll } from 'hooks';
import { isHome } from 'helpers';
import Logo from 'images/logo-felipexperto.inline.svg';
import { theme } from 'styles';
import * as S from './styles';

const Header = ({ height, title }: { height: string; title: string }) => {
  const { main } = theme;
  const { scroll } = useWindowScroll();
  const isHomepage = isHome();
  const [isScrolling, setIsScrolling] = useState(false);
  const [shouldBackgroundBeTransparent, setShouldBackgroundBeTransparent] =
    useState(false);

  useEffect((): EffectCallback => {
    let unmounted = false;

    if (!unmounted) {
      const handleSearchScroll = () => {
        return scroll.y > 0 ? setIsScrolling(true) : setIsScrolling(false);
      };
      handleSearchScroll();
    }

    return () => (unmounted = true);
  }, [scroll]);

  useEffect(() => {
    setShouldBackgroundBeTransparent(() => isHomepage && !isScrolling);
  }, [isScrolling]);

  return (
    <S.Header data-testid="FX_HEADER">
      <S.HeaderWrapper
        theme={main}
        isScrolling={isScrolling}
        isBackgroundTransparent={shouldBackgroundBeTransparent}
        height={height}
      >
        <S.HeaderContainer>
          <Link to={`/`} title={title}>
            <Logo data-logo />
          </Link>
        </S.HeaderContainer>
      </S.HeaderWrapper>
      {!isHomepage && <S.HeaderBottomSpace height={height} />}
    </S.Header>
  );
};

export default Header;
