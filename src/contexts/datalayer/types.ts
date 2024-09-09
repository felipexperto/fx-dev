import { ReactNode } from 'react';
import { DatalayerWindow } from 'types';

export type DatalayerCtxProviderProps = {
  children: ReactNode;
};

export type DatalayerCtxType = Object[] | DatalayerWindow;

export type DatalayerUseCtxProps = {
  DatalayerContext: Function;
  DatalayerContextProvider: Function;
}