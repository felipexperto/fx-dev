import styled, { css } from 'styled-components/macro';

export const Title = styled.h2`
  font-family: "Ubuntu", "Inter", Helvetica, Arial, sans-serif;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.24em;
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};
  text-align: center;
  width: 100%;
`;