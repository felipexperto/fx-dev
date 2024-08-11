import React from 'react';
import { ChipProps } from './types';
import * as S from './styles';

const Chip = ({ children, bgColor = 'transparent', borderColor = 'transparent', ...props }: ChipProps) => (
  <S.Chip bgColor={bgColor} borderColor={borderColor} {...props}>
    {children}
  </S.Chip>
);

export default Chip;
