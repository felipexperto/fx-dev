import styled, { css } from 'styled-components/macro';

export const Tipography = styled.h1`
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.black};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.5rem')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '700')};
  padding-left: 1rem;
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};
  width: 100%;
`;
