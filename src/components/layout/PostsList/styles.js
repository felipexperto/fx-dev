import styled from 'styled-components/macro';
import { theme } from 'styles';

const medias = theme.main.medias;
const { sm } = medias;

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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;

  @media ${sm} {
    flex-direction: row;
  }

  & > a {
    align-items: stretch;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 16px;
    box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08),
      0 1px 3px 1px rgba(66, 66, 66, 0.16);
    color: ${({ theme }) => theme.colors.black};
    font-family: 'Ubuntu', 'Inter', Helvetica, Arial, sans-serif;
    margin: 2%;
    max-width: 100%;
    padding: 1.5rem;
    transition: all 235ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    width: 96%;

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

    @media ${sm} {
      & {
        margin: 2%;
        width: 46%;
      }
    }
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
