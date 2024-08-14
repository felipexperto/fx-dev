import React from 'react';
import { render, screen } from 'utils/test';
import { ListProps } from './types';

import List from './';

describe('[Components] List', () => {
  const generateListOfItems = (numberOfItems: number) => {
    return <>
      { Array(numberOfItems)
          .fill(null)
          .map((_, index) => <li key={index}>Element {index + 1}</li>)
      }
    </>
  }

  const renderView = ({ children, ...props }: ListProps) => {
    const utils = render(<List {...props}>{children}</List>);
    return {
      ...utils,
    };
  };

  test('should render component properly', () => {
    const mockProps: ListProps = { children: 'xablau','data-testid': 'list' };

    renderView(mockProps);
    expect(screen.getByTestId('list')).toBeVisible();
    expect(screen.getByTestId('list')).toHaveStyle('flex-direction: row');
    expect(screen.getByText('xablau')).toBeVisible();
  });

  test('should render column list', () => {
    const mockProps: ListProps = { children: generateListOfItems(3),'data-testid': 'list', flexDirection: 'column' };

    renderView(mockProps);
    expect(screen.getByTestId('list')).toBeVisible();
    expect(screen.getByTestId('list')).toHaveStyle('flex-direction: column');
  });
  
  test('should render list of items', () => {
    const mockProps: ListProps = { children: generateListOfItems(3), 'data-testid': 'list-xablau' };

    renderView(mockProps);
    expect(screen.getByTestId('list-xablau')).toBeVisible();
    expect(screen.getByText('Element 1')).toBeVisible();
    expect(screen.getByText('Element 2')).toBeVisible();
    expect(screen.getByText('Element 3')).toBeVisible();
    expect(screen.queryByText('Element 4')).not.toBeInTheDocument();
  });
});
