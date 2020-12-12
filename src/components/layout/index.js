import React from "react";

import Header from '../header';
import Banner from '../banner';
import Footer from '../footer';
import { Container, ContainerFull } from 'styles';
import { isHome } from 'src/utils/helpers';

const Layout = ({ location, title, children, bgColor }) => {
  const headerHeight = '72px';
  console.log(isHome());
  return (
    <ContainerFull backgroundColor={bgColor}>
      <Header
        height={headerHeight}
        location={location}
        title={title}
      />
      {isHome() && <Banner paddingTop={headerHeight} />}
      <Container direction='column'>
        {children}
      </Container>
      <Footer />
    </ContainerFull>
  )
}

export default Layout;