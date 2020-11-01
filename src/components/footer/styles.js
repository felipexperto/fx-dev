import styled from 'styled-components/macro';

import theme from 'src/styles/Themes';

const footerWrapper = styled.footer`

`;

const emojiWrapper = styled.span`
  color: ${ theme.main.colors.red };
`;

export {
  emojiWrapper,
  footerWrapper,
}