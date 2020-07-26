import React, { Fragment } from "react";

import * as S from './styles';

const Layout = ({ location, title, children, bgColor }) => {

  return (
    <S.wrapperFull backgroundColor={bgColor}>
      <S.wrapperLayout>
        <S.Header location={location} title={title} />
        <S.wrapperContent>
          {children}
        </S.wrapperContent>
        <S.Footer />
      </S.wrapperLayout>
    </S.wrapperFull>
  )
}

export default Layout;