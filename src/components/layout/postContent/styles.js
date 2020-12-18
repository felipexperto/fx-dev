import styled from 'styled-components/macro';

import theme from 'src/styles/Themes';

const { sm } = theme.main.medias;

const wrapperArticle = styled.article`
  border-radius: 8px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  margin-top: 0;
  max-width: 100%;
  padding: 2rem;
  @media ${sm} {
    margin-top: 4rem;
    padding: 4rem 4rem;
  }
`;

const header = styled.header`

`;

const content = styled.section`

`;

const footer = styled.footer`
  padding-top: 3rem;
  
  &::before {
    background-color: ${ theme.main.colors.darkyellow };
    border-radius: 8px;
    content: "";
    display: block;
    height: 10px;
    margin-bottom: 2rem;
    width: 4rem;
  }
`;

const title = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
`;

const tldrText = styled.p`
  border: solid 1px rgba(0,0,0,.2);
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  line-height: 2em;
  padding: 3rem 1.5rem 1.5rem 1.5rem;
  margin-left: 2rem;
  margin-top: -2rem;
`;

const tldrWrapper = styled.div`
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

const tldrHeader = styled.div`
  background-color: ${ theme.main.colors.darkyellow };
  border-radius: 4px;
  box-shadow: 0 4px 20px 0 rgba(244, 188, 18,.15), 0 7px 10px -5px rgba(244, 188, 18,.4);
  color: ${ theme.main.colors.white };
  display: inline-block;
  padding: 1rem 1.25rem; 
`;

const tldrTitle = styled.h2`
  margin-bottom: .25rem;
  margin-top: 0;
`

const tldrSubtitle = styled.span`
  font-family: 'Inter', sans-serif;

`

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

const timeToRead = styled(update)`
`;

export {
  content,
  date,
  dates,
  footer,
  header,
  title,
  tldrText,
  tldrHeader,
  tldrTitle,
  tldrSubtitle,
  tldrWrapper,
  timeToRead,
  update,
  wrapperArticle,
}