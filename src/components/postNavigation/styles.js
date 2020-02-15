import styled from 'styled-components';

import theme from 'src/styles/Themes';

const itemNavigation = styled.li`
  background-color: ${theme.main.colors.almostwhite};
  display: flex;
  width: 49%;

  a {
    box-shadow: none;
    padding: 3rem 1.5rem;
    transition: all 1s .15s;

    &:hover {
      background-color: ${theme.main.colors.yellow};
    }
  }
`;

const itemNavigationLeft = styled(itemNavigation)`
  text-align: left;
`;

const itemNavigationRight = styled(itemNavigation)`
  text-align: right;
`;

const listNavigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const linkPreTitle = styled.div`
  color: ${theme.main.colors.darkgrey};
  font-family: Montserrat, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
`;
const linkTitle = styled.h3`
  color: ${theme.main.colors.grey};
  font-size: 1.2rem;
  margin-top: 0;
`;

const wrapperNavigation = styled.nav`
  margin: 1rem 0 3rem 0;
`;

export {
  itemNavigationLeft,
  itemNavigationRight,
  linkPreTitle,
  linkTitle,
  listNavigation,
  wrapperNavigation,
}