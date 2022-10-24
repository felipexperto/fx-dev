import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { theme } from 'styles';
import { DatalayerContextProvider } from 'contexts';

const Root = ({ children }) => {
  const { main } = theme;

  return (
    <DatalayerContextProvider>
      <ThemeProvider theme={main}>{children}</ThemeProvider>
    </DatalayerContextProvider>
  );
};

Root.propTypes = {
  children: node.isRequired,
};

export default Root;
