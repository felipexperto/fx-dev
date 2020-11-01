import styled from 'styled-components';

import theme from 'styles/Themes';

const { medias, sizes } = theme.main;

const dinamicPadding = pixels => pixels * .05;

const defaultContainer = styled.main`
  background-color: ${({ backgroundColor }) => theme.main.colors[backgroundColor] || 'transparent' };
`;

const Container = styled(defaultContainer)`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;

  @media ${medias.sm} {
    padding: 0 ${dinamicPadding(sizes.sm)}px;
    width: 540px;
  }
  @media ${medias.md} {
    padding: 0 ${dinamicPadding(sizes.md)}px;
    width: 720px;
  }
  @media ${medias.lg} {
    padding: 0 ${dinamicPadding(sizes.lg)}px;
    width: 960px;
  }
`;

const ContainerFull = styled(defaultContainer)`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;

export {
  Container,
  ContainerFull
};
