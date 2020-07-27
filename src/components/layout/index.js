import React from "react";

import * as S from './styles';

const Layout = ({ location, title, children, bgColor }) => {

  return (
    <S.wrapperFull backgroundColor={bgColor}>
      <S.Header location={location} title={title} />
      <S.wrapperLayout>
        <S.wrapperContent>
          {children}
        </S.wrapperContent>
      </S.wrapperLayout>
      <S.Footer />
    </S.wrapperFull>
  )
}

export default Layout;