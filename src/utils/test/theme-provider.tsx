import React from 'react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Root } from 'components/layout';
import { render } from '@testing-library/react';
import { WrapperProviderProps } from './types';

const WrapperProvider = ({ children }: WrapperProviderProps ) => <Root>{children}</Root>;

const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: WrapperProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };
