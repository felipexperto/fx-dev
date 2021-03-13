import React, { createContext, useEffect, useState } from 'react';
import { node } from 'prop-types';

const DatalayerContext = createContext([]);

const DatalayerContextProvider = ({ children }) => {
  const [datalayerComponent, setDatalayerComponent] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setDatalayerComponent([]);
    } else {
      setDatalayerComponent(window.dataLayer ? window.dataLayer : []);
    }
  }, []);

  return (
    <DatalayerContext.Provider value={datalayerComponent}>
      {children}
    </DatalayerContext.Provider>
  );
};

DatalayerContextProvider.defaultProps = {
  children: `<div />`,
};

DatalayerContextProvider.propTypes = {
  children: node,
};

export { DatalayerContext, DatalayerContextProvider };
