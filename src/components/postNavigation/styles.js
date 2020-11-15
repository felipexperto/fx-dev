import styled from 'styled-components/macro';

import theme from 'src/styles/Themes';

const { sm } = theme.main.medias;

const itemNavigation = styled.li`
  background-color: ${theme.main.colors.almostwhite};
  display: flex;
  margin: .5rem 0;
  width: 90%;

  @media ${sm} {
    width: 49%;
  }

  a {
    background-color: ${ theme.main.colors.white };
    border-radius: 4px;
    box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08), 0 1px 3px 1px rgba(66, 66, 66, 0.16);
    padding: 1rem 1.5rem 1.5rem 1.5rem;
    text-decoration: none;
    transition: all 1s .15s;
    width: 100%;

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
  justify-content: center;
  @media ${sm} {
    justify-content: ${props => props.alignmentRight ? 'flex-end' : 'space-between'};
  }
  list-style: none;
  margin-top: 3rem;
  padding: 0;
`;

const linkIcon = styled.div`
  color: ${theme.main.colors.darkgrey};
  font-size: 2.5rem;
  margin-left: -.5rem;
  margin-right: -.5rem;
  text-transform: uppercase;
`;
const linkPreTitle = styled.div`
  color: ${theme.main.colors.grey};
  font-family: 'Inter', sans-serif;
  font-size: .85rem;
  margin-bottom: .75em;
  text-transform: uppercase;
`;
const linkTitle = styled.h3`
  color: ${theme.main.colors.darkgrey};
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 0;
  margin-top: 0;
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
}