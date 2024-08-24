import { createGlobalStyle } from 'styled-components';

import theme from 'styles/Themes';

const { sm } = theme.main.medias;

const PostStyles = createGlobalStyle`

  body {
    background-color: ${theme.main.colors.white};
  }

  article {
    color: ${theme.main.colors.white};
    
    a {
      border-bottom: solid 2px ${theme.main.colors.yellow};
      color: ${theme.main.colors.yellow};
      font-weight: bold;
      text-decoration: none;
      word-break: break-word;
    }

    blockquote {
      background-color: rgba(158, 158, 158, 0.1);
      border-radius: 4px;
      line-height: 1.8em;
      margin: 2rem 0;
      padding: 1rem 2rem 2rem 2rem;
      position: relative;

      ul {
        padding-left: 0;
      }

      > p:last-child {
        margin-bottom: 0;
      }
    }

    code:not([slot="code"]) {
      background: ${theme.main.colors.yellow};
      border-radius: 4px;
      color: ${theme.main.colors.almostblack};
      display: inline-block;
      font-family: "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace;
      padding: 0 5px;
      vertical-align: middle;
    }

    h1 {
      font-size: 2em;  
      margin-top: 1.667em; 
    }
    h2 {
      font-size: 1.8em;
      margin-top: 1.8em; 
    }
    h3 {
      font-size: 1.5em;
      margin-top: 2em; 
    }
    h4 {
      font-size: 1.3em;
      margin-top: 2em; 
    }
    h5 {
      font-size: 1.2em;
      margin-top: 1.667em; 
    }
    h6 {
      font-size: 1.1em;
      margin-top: 1.455em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.main.colors.darkyellow};
      margin-bottom: 0;
    }

    h2.anchor,
    h3.anchor,
    h4.anchor,
    h5.anchor,
    h6.anchor {
      margin-top: -4.375rem;

      &::before {
        content: '';
        display: block;
        height: 6.25rem;
        margin: -2rem 0 0;
      }
    }

    h2,
    h3 {
      font-weight: 700;
      line-height: 1.4em;
    }

    h4,
    h5,
    h6 {
      margin-bottom: .25rem;
    }

    h4 + p,
    h5 + p,
    h6 + p {
      margin-top: .25rem;
    }
  
    section {
      line-height: 1.6em;

      a[target="_blank"]::after {
        content: "\\eb09";
        display: inline-block;
        font-family: 'boxicons';
        font-size: .85em;
        margin-left: .15em;
        vertical-align: middle;
      }
    }

    ul {
      line-height: 1.75em;
      list-style-position: inside;
      padding-left: 1rem;
      @media ${sm} {
        padding-left: 2rem;
      }

      li {

        code:not([slot="code"]) {
          max-width: calc(100% - 2rem);
        }

        > p {
          display: inline;
        }
      }
    }

    [class^="deckgo-"] {
      margin-bottom: 3rem;
    }

    .fx-group {
      > *:first-child {
        margin-bottom: 0;
      }
      > *:last-child {
        margin-bottom: 3rem;
        margin-top: .5rem;
      }
    }

  }
`;

export default PostStyles;
