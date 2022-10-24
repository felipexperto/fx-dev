import React from 'react';
import { node, oneOfType, string } from 'prop-types';

import * as S from './styles';

const Chip = ({ children, bgColor, borderColor }) => (
  <S.Chip bgColor={bgColor} borderColor={borderColor}>
    {children}
  </S.Chip>
);

Chip.propTypes = {
  bgColor: string,
  borderColor: string,
  children: oneOfType([string, node]).isRequired,
};

Chip.defaultProps = {
  bgColor: 'transparent',
  borderColor: 'transparent',
};

export default Chip;
