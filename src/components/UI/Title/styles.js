import styled, { css } from 'styled-components/macro';

export const Title = styled.h2`
  font-family: "Ubuntu", "Inter", Helvetica, Arial, sans-serif;
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