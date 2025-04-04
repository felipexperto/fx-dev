import styled from 'styled-components';

const sm = ({ theme }: { theme: any }) => theme.medias.sm;

const linkIcon = styled.div`
  color: ${({ theme }) => theme.colors.darkgrey};
  font-size: 2.5rem;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  text-transform: uppercase;
`;
const linkPreTitle = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 0.85rem;
  margin-bottom: 0.75em;
  text-transform: uppercase;
`;
const linkTitle = styled.h3`
  color: ${({ theme }) => theme.colors.darkgrey};
  font-size: 1.2rem;
  margin-bottom: 0;
  margin-top: 0;
`;

const itemNavigation = styled.li`
  display: flex;
  margin: 0.5rem 0;
  width: 90%;

  @media ${sm} {
    width: 49%;
  }

  a {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    box-shadow:
      0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12),
      0 5px 5px -3px rgba(0, 0, 0, 0.2);
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    text-decoration: none;
    transition: all 0.5s;
    width: 100%;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkyellow};
      box-shadow:
        0 4px 20px 0 rgba(244, 188, 18, 0.15),
        0 7px 10px -5px rgba(244, 188, 18, 0.4);
      & ${linkIcon}, & ${linkTitle} {
        color: ${({ theme }) => theme.colors.white};
        transition: all 0.5s;
      }
    }
  }
`;

const itemNavigationLeft = styled(itemNavigation)`
  text-align: left;
`;

const itemNavigationRight = styled(itemNavigation)`
  text-align: right;
`;

const listNavigation = styled.ul<{ alignmentRight?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media ${sm} {
    justify-content: ${(props) =>
      props.alignmentRight ? 'flex-end' : 'space-between'};
  }
  list-style: none;
  margin-top: 3rem;
  padding: 0;
`;

const wrapperNavigation = styled.nav`
  margin: 1rem 0 3rem 0;
  width: 100%;
`;

export {
  itemNavigationLeft,
  itemNavigationRight,
  linkIcon,
  linkPreTitle,
  linkTitle,
  listNavigation,
  wrapperNavigation,
};
