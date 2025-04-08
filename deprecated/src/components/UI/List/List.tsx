import React from 'react';
import { ListProps } from './types';
import * as S from './style';

const List = ({ as = 'ul', children, flexDirection, ...props }: ListProps) => {
  return (
    <>
      <S.List as={as} flexDirection={flexDirection} {...props}>
        {children}
      </S.List>
    </>
  );
};

export default List;
