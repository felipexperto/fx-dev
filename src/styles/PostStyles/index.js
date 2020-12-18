import { createGlobalStyle } from 'styled-components';

import theme from 'src/styles/Themes';

const { sm } = theme.main.medias;

const PostStyles = createGlobalStyle`

  body {
    background-color: ${theme.main.colors.white};
  }

  article {
    
    a {
      border-bottom: solid 2px black;
      color: currentColor;
      font-family: 'Inter', sans-serif;
      font-weight: bold;
      line-break: anywhere;
      @media ${sm} {
        line-break: normal;
      }
      text-decoration: none;
    }

    section {
      font-family: Inter, sans-serif;
      line-height: 1.5em;

      a[target="_blank"]::after {
        content: "\\eb09";
        display: inline-block;
        font-family: 'boxicons';
        font-size: .85em;
        margin-left: .15em;
        vertical-align: middle;
      }
    }
    
    blockquote {
      line-height: 1.8em;
      margin: 2rem 0;
      padding-left: 2rem;
      position: relative;

      &::before {
        background-color: ${theme.main.colors.darkyellow};
        border-radius: 8px;
        box-shadow: 0 4px 20px 0 rgba(244, 188, 18,.15), 0 7px 10px -5px rgba(244, 188, 18,.4);
        bottom: 0;
        content: "";
        display: block;
        left: 0;
        position: absolute;
        top: 0;
        width: 0.32813rem;
      }

      ul {
        padding-left: 0;
      }
    }

    & code:not([slot="code"]) {
      background: #f0f9fb;
      border-radius: 4px;
      color: #267fab;
      display: inline-block;
      padding: 0 5px;
      vertical-align: middle;
    }

    & [class^="deckgo-"] {
      margin-bottom: 3em;
    }

    h2,
    h3 {
      font-family: 'Ubuntu', sans-serif;
      font-weight: 700;
      line-height: 1.4em;
    }

    h2 {
      margin-top: 2em;
    }
  
    ul {
      line-height: 1.75em;
      list-style-position: inside;
      padding-left: 1rem;
      @media ${sm} {
        padding-left: 2rem;
      }
    }

  }
`;

export default PostStyles;
