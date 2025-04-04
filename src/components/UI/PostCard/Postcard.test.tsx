import React from 'react';
import { render, screen } from 'utils/test';
import { PostCardProps } from './types';

import PostCard from './';

describe('[Components] Postcard', () => {
  const renderView = ({ ...props }: PostCardProps) => {
    const utils = render(<PostCard {...props} />);
    return {
      ...utils,
    };
  };

  test('should render component properly', () => {
    const mockProps: PostCardProps = {
      category: 'Carreira',
      date: '02 janeiro, 2021',
      minutes: 3,
      title: 'Meu 2020 como pessoa desenvolvedora',
      url: '/meu-2020-como-pessoa-desenvolvedora/',
    };

    renderView(mockProps);
    const component = screen.getByTestId('meu-2020-como-pessoa-desenvolvedora');

    expect(component).toBeVisible();
  });
});
