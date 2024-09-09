import React, { createContext, useEffect, useState } from 'react';
import { DatalayerCtxProviderProps, DatalayerCtxType } from './types';

const DatalayerContext = createContext<DatalayerCtxType>([]);

const DatalayerContextProvider = ({ children }: DatalayerCtxProviderProps) => {
  const [datalayerComponent, setDatalayerComponent] =
    useState<DatalayerCtxType>([]);

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

export { DatalayerContext, DatalayerContextProvider };
