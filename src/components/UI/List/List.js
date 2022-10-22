import React from 'react';
import { node, string } from 'prop-types';
import * as S from './style';

const List = ({ as, children, 'data-testid': dataTestId, flexDirection }) => {
  return (
    <S.Container data-testid={dataTestId}>
      <S.List as={as} flexDirection={flexDirection}>
        {children}
      </S.List>
    </S.Container>
  );
};

List.defaultProps = {
  as: 'ul',
  children: '<div />',
  'data-testid': 'list',
  flexDirection: 'row',
};

List.propTypes = {
  as: string,
  children: node,
  'data-testid': string,
  flexDirection: string,
};

export default List;
