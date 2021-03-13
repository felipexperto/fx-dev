import styled from 'styled-components/macro';

import theme from 'src/styles/Themes';

const SocialAnchor = styled.a`
  border-bottom: 0;
  padding: 0.25rem 0.5rem;
  transition: all 0.5s 0.15s;

  > i {
    color: ${({ colorSchemeReverse }) =>
      colorSchemeReverse
        ? theme.main.colors.white
        : theme.main.colors.darkgrey};
    transition: all 0.5s 0.15s;
  }

  &:hover {
    > i {
      color: ${theme.main.colors.darkyellow};
    }
  }
`;
const SocialItem = styled.li`
  font-size: 1.5rem;
  margin-right: 1rem;

  &:first-child {
    margin-left: -0.5rem;
  }
`;
const SocialList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export { SocialAnchor, SocialItem, SocialList };
