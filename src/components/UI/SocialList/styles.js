import styled from 'styled-components/macro';

const SocialAnchor = styled.a`
  border-bottom: 0;
  padding: 0.25rem 0.5rem;
  transition: all 0.5s 0.15s;

  > i {
    color: ${({ theme, colorSchemeReverse }) =>
      colorSchemeReverse ? theme.colors.white : theme.colors.darkgrey};
    transition: all 0.5s 0.15s;
  }

  &:hover {
    > i {
      color: ${({ theme }) => theme.colors.darkyellow};
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
