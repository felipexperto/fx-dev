import React from 'react';
import { node, string } from 'prop-types';

import { Banner, Footer, Header, Root } from 'components/layout';
import { Container, ContainerFull } from 'styles';
import { isHome } from 'helpers';

const App = ({ title, children, bgColor }) => {
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

App.defaultProps = {
  bgColor: 'transparent',
  colorSchemeReverse: false,
};

App.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  bgColor: string,
};

export default App;
