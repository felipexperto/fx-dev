import styled, { css } from 'styled-components/macro';

export const Tipography = styled.h1`
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.black};
  font-family: 'Ubuntu', 'Inter', Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  padding-left: 1rem;
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};
  width: 100%;
`;
