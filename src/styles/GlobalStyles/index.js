import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
`;

export default GlobalStyles;