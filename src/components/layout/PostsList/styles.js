import styled from 'styled-components';
import { List as L, PostCard as P } from 'components/UI';

const lg = ({ theme }) => theme.medias.lg;

const List = styled(L)`
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${lg} {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > li {
      flex-basis: calc(50% - 1.5rem);
      margin-right: 0;
    }
  }
`;

const PostCard = styled(P)``;

export { List, PostCard };
