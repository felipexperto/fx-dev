import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    overflow-anchor: none;
  }

`;

export default GlobalStyles;
