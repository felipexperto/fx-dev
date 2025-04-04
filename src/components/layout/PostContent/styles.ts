import styled from 'styled-components';

const sm = ({ theme }: { theme: any }) => theme.medias.sm;

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
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
`;

const tldrText = styled.p`
  line-height: 1.6em;
`;

const tldrWrapper = styled.div`
  background-color: rgba(158, 158, 158, 0.1);
  border: solid 1px ${({ theme }) => theme.colors.darkyellow};
  border-radius: 4px;
  padding: 2rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

const tldrHeader = styled.div`
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
`;

const tldrTitle = styled.h2`
  margin-bottom: 0.25rem;
  margin-top: 0;
`;

const tldrSubtitle = styled.span`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

const dates = styled.ul`
  margin-bottom: 16px;
  margin-top: 4px;
  padding-left: 0;
`;

const dataDefault = styled.li`
  color: ${({ theme }) => theme.colors.lightgrey};
  display: inline-block;
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
