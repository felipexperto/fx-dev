import React from 'react';
import { render, screen } from 'utils/test';

import BannerIllustration from './';

describe('[Components] BannerIllustration', () => {
  const renderView = () => {
    const utils = render(<BannerIllustration />);
    return {
      ...utils,
    };
  };

  test('should render component properly', () => {
    renderView();
    const component = screen.getByTestId('banner-wrapper');

    expect(component).toBeVisible();
  });
});
