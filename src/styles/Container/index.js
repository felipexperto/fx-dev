import styled, { css } from 'styled-components/macro';

import theme from 'styles/Themes';

const { medias } = theme.main;

const defaultContainer = styled.main`
  background-color: ${({ backgroundColor, theme }) =>
    theme.colors[backgroundColor] || 'transparent'};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}` : '0'};
`;

const Container = styled(defaultContainer)`
  align-items: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom}px;
    `};
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop}px;
    `};
  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `};

  @media ${medias.sm} {
    width: 540px;
  }
  @media ${medias.md} {
    width: 720px;
  }
  @media ${medias.lg} {
    width: 960px;
  }
  @media ${medias.xl} {
    width: 1140px;
  }
  width: 100%;
`;

const ContainerFull = styled(defaultContainer)`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;

export { Container, ContainerFull };
