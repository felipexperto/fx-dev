import React from 'react';
import { node, string } from 'prop-types';

import * as S from './styles';

const Tipography = ({ as, children, ...rest }) => (
  <S.Tipography as={as} {...rest}>
    {children}
  </S.Tipography>
);

Tipography.propTypes = {
  as: string,
  children: node.isRequired,
};

Tipography.defaultProps = {
  as: 'h1',
};

export default Tipography;
