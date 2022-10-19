import React from 'react';
import { render } from 'utils/test';

import List from './';

describe('[Components] List', () => {
  const setup = () => {
    const utils = render(<List>xablau</List>);
    const self = utils.getByTestId('list');
    return {
      self,
      ...utils,
    };
  };

  test('should render component properly', () => {
    const { self } = setup();
    expect(self).toBeInTheDocument();
  });
});
