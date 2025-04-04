import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'styles';
import { DatalayerContextProvider } from 'contexts';

const Root = ({ children }: { children: ReactNode }) => {
  const { main } = theme;

  return (
    <DatalayerContextProvider>
      <ThemeProvider theme={main}>{children}</ThemeProvider>
    </DatalayerContextProvider>
  );
};

export default Root;
