import styled from 'styled-components/macro';

import theme from 'src/styles/Themes';

const footerWrapper = styled.footer`
  color: ${ theme.main.colors.grey };
  font-family: 'Inter', sans-serif;
  margin-top: 3rem;
  padding: .5rem 0;
  text-align: center;
  width: 100%;
`;

const emojiWrapper = styled.span`
  color: ${ theme.main.colors.red };
`;

export {
  emojiWrapper,
  footerWrapper,
}