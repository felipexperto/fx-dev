import React from 'react';
import { node, string } from 'prop-types';

import * as S from './styles';

const Title = ({ as, children, ...rest }) => (
  <S.Title as={as} {...rest}>
    {children}
  </S.Title>
);

Title.propTypes = {
  as: string,
  children: node.isRequired,
};

Title.defaultProps = {
  as: 'h1',
};

export default Title;
