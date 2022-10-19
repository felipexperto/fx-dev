import React from 'react';
import { node, string } from 'prop-types';
import * as S from './style';

const List = ({ as, children, flexDirection }) => {
  return (
    <S.Container data-testid="list">
      <S.List as={as} flexDirection={flexDirection}>
        {children}
      </S.List>
    </S.Container>
  );
};

List.defaultProps = {
  as: 'ul',
  children: `<div />`,
  flexDirection: 'row',
};

List.propTypes = {
  as: string,
  children: node,
  flexDirection: string,
};

export default List;
