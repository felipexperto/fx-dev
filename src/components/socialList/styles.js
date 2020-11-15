import styled from 'styled-components/macro';

import theme from 'src/styles/Themes';

const SocialAnchor = styled.a`
  box-shadow: none;
  border-bottom: solid 1px ${theme.main.colors.yellow};
  padding: .25rem .5rem;
  transition: all .5s .15s;

  > i {
    color: ${theme.main.colors.darkgrey};
    transform: translateY(0);
    transition: all .5s .15s;
  }

  &:hover {
    box-shadow: inset 0 -5px 0 0 ${theme.main.colors.yellow};

    > i {
      transform: translateY(-5px);
    }
  }
`;
const SocialItem = styled.li`
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-top: .5rem;
`;
const SocialList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export {
  SocialAnchor,
  SocialItem,
  SocialList,
};