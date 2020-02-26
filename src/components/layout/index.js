import React, { Fragment, useEffect } from "react";

import GlobalStyles from 'src/styles/GlobalStyles';
import * as S from './styles';

const Layout = ({ location, title, children }) => {

  useEffect(() => {
    try {
      deckdeckgoLoader(window);
    } catch (err) {
      console.log(err);
    }
  },[]);

  return (
    <Fragment>
      <GlobalStyles />
      <S.wrapperLayout>
        <S.Header location={location} title={title} />
        <S.wrapperContent>
          {children}
        </S.wrapperContent>
        <S.Footer />
      </S.wrapperLayout>
    </Fragment>
  )
}

export default Layout;