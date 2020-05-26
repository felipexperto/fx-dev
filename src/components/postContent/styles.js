import styled from 'styled-components';

import theme from 'src/styles/Themes';
import { rhythm } from "src/utils/typography"

const wrapperArticle = styled.article`

`;

const header = styled.header`

`;

const content = styled.section`

`;

const footer = styled.footer`
  padding-top: ${rhythm(1)};
  
  &::before {
    background-color: ${ theme.main.colors.yellow };
    content: "";
    display:block;
    height: 10px;
    margin-bottom: ${rhythm(1)};
    width: 4rem;
  }
`;

const title = styled.h1`
  font-family: 'Merriweather','Georgia',serif;
  font-style: italic;
  margin-bottom: 0;
  margin-top: ${rhythm(1)};
`;

const date = styled.p`
  color: ${ theme.main.colors.grey };
  display: block;
  font-family: Montserrat, sans-serif;
  font-size: .85rem;
  line-height: 1.5em;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(.25)};
`;

export {
  content,
  date,
  footer,
  header,
  title,
  wrapperArticle,
}