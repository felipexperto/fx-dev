import React from 'react';
import { AppProps } from './types';
import { Banner, Footer, Header, Root } from 'components/layout';
import { Container, ContainerFull } from 'styles';
import { isHome } from 'helpers';

const App = ({ title, children, bgColor = 'transparent' }: AppProps) => {
  const headerHeight = '72px';

  return (
    <Root>
      <ContainerFull as="div" backgroundColor={bgColor}>
        <Header height={headerHeight} title={title} />
        {isHome() && <Banner paddingTop={headerHeight} />}
        <ContainerFull
          backgroundColor="darkestgrey"
          borderRadius="16px 16px 0 0"
        >
          <Container as="div" direction="column">
            {children}
          </Container>
        </ContainerFull>
        <Footer />
      </ContainerFull>
    </Root>
  );
};

export default App;
