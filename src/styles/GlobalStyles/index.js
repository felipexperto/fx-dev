import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;