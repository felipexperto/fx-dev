import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Fira Sans', Ubuntu, sans-serif;
  }

  .bx::after,
  .bx::before {
    font-family: 'boxicons' !important;
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
