import styled from 'styled-components/macro';
import { Link } from 'gatsby';

// const sm = ({ theme }) => theme.medias.sm;

const Card = styled(Link)`
  margin: 0.5rem 1rem;
  text-decoration: none;
`;

const CardContent = styled.div`
  background-color: ${({ theme }) => theme.colors.darkgrey};
  border-color: ${({ theme }) => theme.colors.grey};
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  display: flex;
  padding: 1rem;
`;

const CardFirstColumn = styled.div``;

const CardSecondColumn = styled.div`
  align-items: flex-start;
  display: flex;
  padding-left: 1rem;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.6rem;
  margin-top: 0.25rem;
`;

const CardComplementaryInfosList = styled.ul`
  color: ${({ theme }) => theme.colors.lightgrey};
  display: flex;
  font-size: 0.75rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CardComplementaryInfosItem = styled.li``;

const CardDate = styled(CardComplementaryInfosItem)``;

const CardReadingTime = styled(CardComplementaryInfosItem)`
  &::before {
    content: '•';
    display: inline-block;
    margin-left: 0.25rem;
    padding-right: 0.25rem;
  }
`;

export {
  Card,
  CardContent,
  CardFirstColumn,
  CardSecondColumn,
  CardTitle,
  CardComplementaryInfosList,
  CardDate,
  CardReadingTime,
};
