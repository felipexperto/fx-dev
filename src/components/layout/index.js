import React from "react";

import Header from '../header';
import Footer from '../footer';
import { Container, ContainerFull } from 'styles/Container';

const Layout = ({ location, title, children, bgColor }) => {
  return (
    <ContainerFull backgroundColor={bgColor}>
      <Header location={location} title={title} />
      <Container>
        {children}
      </Container>
      <Footer />
    </ContainerFull>
  )
}

export default Layout;