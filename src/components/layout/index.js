import React from "react";

import * as S from './styles';

const Layout = ({ location, title, children }) => {

  return (
    <S.wrapperLayout>
      <S.Header location={location} title={title} />
      <S.wrapperContent>
        {children}
      </S.wrapperContent>
      <S.Footer />
    </S.wrapperLayout>
  )
}

export default Layout;