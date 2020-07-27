import styled from 'styled-components';

import theme from 'src/styles/Themes';

export { default as Header } from '../header';
export { default as Footer } from '../footer';

const { medias, sizes } = theme.main;

const wrapperFull = styled.div`
  background-color: ${({ backgroundColor }) => theme.main.colors[backgroundColor] || theme.main.colors.white };
`;

const dinamicPadding = pixels => pixels * .05;

const wrapperLayout = styled.div`
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

const wrapperContent = styled.main`
`;

export {
  wrapperFull,
  wrapperContent,
  wrapperLayout,
}