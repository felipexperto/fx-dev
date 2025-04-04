/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { ReactNode } from 'react';
import { DatalayerWindow } from 'types';

export type DatalayerCtxProviderProps = {
  children: ReactNode;
};

export type DatalayerCtxType = object[] | DatalayerWindow;

export type DatalayerUseCtxProps = {
  DatalayerContext: Function;
  DatalayerContextProvider: Function;
};
