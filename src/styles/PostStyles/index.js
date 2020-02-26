import { createGlobalStyle } from 'styled-components';

import theme from 'src/styles/Themes';

const PostStyles = createGlobalStyle`

  article {
    
    a {
      box-shadow: inset 0px -10px 0px 0 ${theme.main.colors.yellow};
      color: currentColor;
      font-family: 'Courier New', monospace;
      font-size: 1.1em;
    }

    section {

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
      border-left: 0.32813rem solid #ffee17;
    }
  }
`;

export default PostStyles;
