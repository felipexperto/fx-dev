import React from 'react';
import { node, string } from 'prop-types';

import Header from 'components/layout/Header';
import Banner from 'components/layout/Banner';
import Footer from 'components/layout/Footer';
import { Container, ContainerFull } from 'styles';
import { isHome } from 'utils/helpers';
import { DatalayerContextProvider } from 'contexts';

const App = ({ title, children, bgColor }) => {
  const headerHeight = '72px';

  return (
    <DatalayerContextProvider>
      <ContainerFull backgroundColor={bgColor}>
        <Header height={headerHeight} title={title} />
        {isHome() && <Banner paddingTop={headerHeight} />}
        <Container direction="column">{children}</Container>
        <Footer />
      </ContainerFull>
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
