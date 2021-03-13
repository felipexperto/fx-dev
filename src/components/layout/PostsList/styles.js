import styled from 'styled-components/macro';

const medias = ({ theme }) => theme.medias;
const { sm, xl } = medias;

const cardCategory = styled.span`
  background-color: ${({ theme }) => theme.colors.darkyellow};
  border-radius: 100em;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  padding: 0.25em 1em;
  text-transform: uppercase;
`;

const cardTitle = styled.h3`
  font-weight: 700;
  margin-bottom: 0.25em;
  margin-top: 0.75em;

  > a {
    box-shadow: none;
  }
`;

const cardComplementaryInfosList = styled.ul`
  list-style: none;
  margin-bottom: 0.5rem;
  margin-left: 0;
  padding-left: 0;
`;

const cardComplementaryInfosItem = styled.li`
  color: ${({ theme }) => theme.colors.grey};
  display: inline-block;
  font-size: 0.8rem;
`;

const cardDate = styled(cardComplementaryInfosItem)`
  color: ${({ theme }) => theme.colors.darkgrey};
`;

const cardReadingTime = styled(cardComplementaryInfosItem)`
  color: ${({ theme }) => theme.colors.darkgrey};

  &::before {
    content: '•';
    display: inline-block;
    margin-left: 0.25rem;
    padding-right: 0.25rem;
  }
`;

const cardList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  & > a,
  & > span {
    align-items: stretch;
    border-radius: 16px;
    box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08),
      0 1px 3px 1px rgba(66, 66, 66, 0.16);
    font-family: 'Ubuntu', 'Inter', Helvetica, Arial, sans-serif;
    margin: 2% 8%;
    max-width: 100%;
    padding: 1.5rem;
    transition: all 235ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    width: 100%;

    @media ${sm} {
      margin: 8px;
      width: 46%;
    }

    @media ${xl} {
      width: 30%;
    }
  }

  & > a {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};

    &:focus,
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkyellow};
      color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 1px 8px 5px rgba(66, 66, 66, 0.08),
        0 1px 3px 1px rgba(66, 66, 66, 0.16);
      transform: scale(1.1);
    }
    &:focus ${cardCategory}, &:hover ${cardCategory} {
      background-color: ${({ theme }) => theme.colors.darkgrey};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  & > span {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.darkyellow};
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    padding-top: 3rem;
  }

  [data-cardlistplaceholderimage] {
    height: 90%;
    width: 90%;
  }
`;

const cardHeader = styled.header``;

const cardFooter = styled.footer`
  margin-top: 1em;
`;

export {
  cardList,
  cardHeader,
  cardFooter,
  cardCategory,
  cardTitle,
  cardComplementaryInfosList,
  cardDate,
  cardReadingTime,
};
