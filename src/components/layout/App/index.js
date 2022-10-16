import React from 'react';
import { node, string } from 'prop-types';
import { ThemeProvider } from 'styled-components/macro';

import { Banner, Footer, Header } from 'components/layout';
import { Container, ContainerFull, theme } from 'styles';
import { isHome } from 'utils/helpers';
import { DatalayerContextProvider } from 'contexts';

const App = ({ title, children, bgColor }) => {
  const headerHeight = '72px';
  const { main } = theme;

  return (
    <DatalayerContextProvider>
      <ThemeProvider theme={main}>
        <ContainerFull backgroundColor={bgColor}>
          <Header height={headerHeight} title={title} />
          {isHome() && <Banner paddingTop={headerHeight} />}
          <ContainerFull backgroundColor="darkestgrey" borderRadius="16px">
            <Container direction="column">{children}</Container>
          </ContainerFull>
          <Footer />
        </ContainerFull>
      </ThemeProvider>
    </DatalayerContextProvider>
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
