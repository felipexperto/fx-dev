import React from 'react';
import { render, screen } from 'utils/test';
import { AvatarProps } from './types';

import Avatar from './';

describe('[Components] Avatar', () => {
  const renderView = ({ image, label, ...props }: AvatarProps) => {
    const utils = render(<Avatar image={image} label={label} {...props}/>);
    return {
      ...utils,
    };
  };

  test('should render component properly', () => {
    const mockProps: AvatarProps = { 'data-testid': 'avatar', image: 'xablau.jpg', label: 'Felipe' };

    renderView(mockProps);
    const component = screen.getByTestId('avatar');

    expect(component).toBeVisible();
    expect(component).toHaveAttribute('alt', 'Felipe');
  });
});
