import styled, { css } from 'styled-components';
import { TypographyProps } from './types';

const setMargin = (margin: string) => css`
  margin: ${margin};
`;

export const Typography = styled.h1<TypographyProps>`
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.black};
  font-size: ${({ fontSize }) => fontSize || '1.5rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '700'};
  ${({ margin }) => margin && setMargin(margin)}
  padding-left: 1rem;
  width: 100%;
`;
