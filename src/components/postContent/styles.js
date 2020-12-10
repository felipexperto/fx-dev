import styled from 'styled-components/macro';

import theme from 'src/styles/Themes';

const { sm } = theme.main.medias;

const wrapperArticle = styled.article`
  max-width: 100%;
  padding: 0 1rem;
  @media ${sm} {
    padding: 0;
  }
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
    display: block;
    height: 10px;
    margin-bottom: 16px;
    width: 4rem;
  }
`;

const title = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 1.5em;
`;

const tldrText = styled.p`
  font-family: 'Inter', sans-serif;
  line-height: 1.5em;
  padding-left: 2rem;
`;

const tldrWrapper = styled.div`
  border-bottom: solid 1px ${ theme.main.colors.lightgrey };
  margin-bottom: 2rem;
  padding-bottom: 2rem;
`;

const tldrTitle = styled.h2`
  background-color: ${ theme.main.colors.yellow };
  display: inline-block;
  margin-bottom: .5rem;
  margin-top: 1.75rem;
  padding: .25rem .5rem .25rem 2rem; 
`;

const dates = styled.ul`
  margin-bottom: 16px;
  margin-top: 4px;
  padding-left: 0;
`;

const dataDefault = styled.li`
  color: ${ theme.main.colors.grey };
  display: inline-block;
  font-family: Inter, sans-serif;
  font-size: .85rem;
  line-height: 1.5em;
`;

const date = styled(dataDefault)`
`;

const update = styled(dataDefault)`

  &::before {
    content: "•";
    display: inline-block;
    margin-left: .25rem;
    padding-right: .25rem;
  }
`;

export {
  content,
  date,
  dates,
  footer,
  header,
  title,
  tldrText,
  tldrTitle,
  tldrWrapper,
  update,
  wrapperArticle,
}