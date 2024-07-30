import React from 'react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Root } from 'components/layout';
import { render } from '@testing-library/react';

// eslint-disable-next-line react/prop-types
const WrapperProvider = ({ children }) => <Root>{children}</Root>;

const customRender = (ui, options) =>
  render(ui, { wrapper: WrapperProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };
