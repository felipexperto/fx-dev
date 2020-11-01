import styled from 'styled-components/macro';

import theme from 'src/styles/Themes';

const wrapperArticle = styled.article`

`;

const header = styled.header`

`;

const content = styled.section`

`;

const footer = styled.footer`
  padding-top: 16px;
  
  &::before {
    background-color: ${ theme.main.colors.yellow };
    content: "";
    display:block;
    height: 10px;
    margin-bottom: 16px;
    width: 4rem;
  }
`;

const title = styled.h1`
  font-family: 'Ubuntu',sans-serif;
  font-style: italic;
  margin-bottom: 0;
  margin-top: 16px;
`;

const date = styled.p`
  color: ${ theme.main.colors.grey };
  display: block;
  font-family: Montserrat, sans-serif;
  font-size: .85rem;
  line-height: 1.5em;
  margin-bottom: 16px;
  margin-top: 4px;
`;

export {
  content,
  date,
  footer,
  header,
  title,
  wrapperArticle,
}