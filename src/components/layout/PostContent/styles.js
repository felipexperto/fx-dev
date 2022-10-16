import styled from 'styled-components/macro';

const sm = ({ theme }) => theme.medias.sm;

const wrapperArticle = styled.article`
  border-radius: 8px;
  margin-top: 0;
  max-width: 100%;
  padding: 2rem;
  @media ${sm} {
    padding: 4rem 4rem;
  }
`;

const header = styled.header``;

const content = styled.section``;

const footer = styled.footer`
  padding-top: 3rem;

  &::before {
    background-color: ${({ theme }) => theme.colors.darkyellow};
    border-radius: 8px;
    content: '';
    display: block;
    height: 10px;
    margin-bottom: 2rem;
    width: 4rem;
  }
`;

const title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Ubuntu', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
`;

const tldrText = styled.p`
  border: solid 1px rgba(0, 0, 0, 0.2);
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
  background-color: ${({ theme }) => theme.colors.darkyellow};
  border-radius: 4px;
  box-shadow: 0 4px 20px 0 rgba(244, 188, 18, 0.15),
    0 7px 10px -5px rgba(244, 188, 18, 0.4);
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  padding: 1rem 1.25rem;
`;

const tldrTitle = styled.h2`
  margin-bottom: 0.25rem;
  margin-top: 0;
`;

const tldrSubtitle = styled.span`
  font-family: 'Inter', sans-serif;
`;

const dates = styled.ul`
  margin-bottom: 16px;
  margin-top: 4px;
  padding-left: 0;
`;

const dataDefault = styled.li`
  color: ${({ theme }) => theme.colors.lightgrey};
  display: inline-block;
  font-family: Inter, sans-serif;
  font-size: 0.85rem;
  line-height: 1.5em;
`;

const date = styled(dataDefault)``;

const update = styled(dataDefault)`
  &::before {
    content: '•';
    display: inline-block;
    margin-left: 0.25rem;
    padding-right: 0.25rem;
  }
`;

const timeToRead = styled(update)``;

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
};
