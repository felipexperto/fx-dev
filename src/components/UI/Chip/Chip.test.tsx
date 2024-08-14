import React from 'react';
import { render, screen } from 'utils/test';
import { ChipProps } from './types';

import Chip from './';

describe('[Components] Chip', () => {
  const renderView = ({ children, ...props }: ChipProps) => {
    const utils = render(<Chip {...props}>{children}</Chip>);
    return {
      ...utils,
    };
  };

  test('should render component properly', () => {
    const mockProps: ChipProps = { children: 'xablau','data-testid': 'chip' };

    renderView(mockProps);
    const component = screen.getByTestId('chip');
    
    expect(component).toBeVisible();
    expect(component).toHaveStyle('background-color: transparent');
    expect(component).toHaveStyle('border-color: transparent');
    expect(screen.getByText('xablau')).toBeVisible();
  });
});
