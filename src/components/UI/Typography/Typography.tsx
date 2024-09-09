import React from 'react';
import { TypographyProps } from './types';

import * as S from './styles';

const Typography = ({ children, ...props }: TypographyProps) => (
  <S.Typography {...props}>{children}</S.Typography>
);

export default Typography;
