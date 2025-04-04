import React from 'react';
import { render, screen } from 'utils/test';
import { BoxIconProps } from './types';

import BoxIcon from './';

describe('[Components] BoxIcon', () => {
  const renderView = ({ ...props }: BoxIconProps) => {
    const utils = render(<BoxIcon {...props} />);
    return {
      ...utils,
    };
  };

  test('should render component properly', () => {
    const mockProps: BoxIconProps = {
      className: 'bx-left-arrow-alt',
      'data-testid': 'box-icon',
      name: 'arrow-left',
    };

    renderView(mockProps);
    const component = screen.getByTestId('box-icon');

    expect(component).toBeVisible();
  });
});
