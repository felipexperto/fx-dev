import styled from 'styled-components';

import theme from 'src/styles/Themes';

const SocialAnchor = styled.a`
  box-shadow: 0 1px 0 0 ${theme.main.colors.yellow};
  padding: .25rem;

  &:hover {
    box-shadow: inset 0 -5px 0 0 ${theme.main.colors.yellow};

    > box-icon {
      transform: translateY(-5px);
    }
  }
`;
const SocialItem = styled.li`
  margin-right: 1rem;
`;
const SocialList = styled.ul`
  display: flex;
  list-style: none;
`;

export {
  SocialAnchor,
  SocialItem,
  SocialList,
};