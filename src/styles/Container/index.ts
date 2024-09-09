import styled from 'styled-components';
import { FlexDirection } from 'types/CssTypes';
import theme from 'styles/Themes';

const { medias } = theme.main;

const defaultContainer = styled.main<{
  backgroundColor?: string;
  borderRadius?: string;
}>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme.colors[backgroundColor] : 'transparent'};
  border-radius: ${({ borderRadius }) =>
    borderRadius ?? '0'};
`;

const Container = styled(defaultContainer)<{
  direction?: FlexDirection;
  marginBottom?: number;
  marginTop?: number;
}>`
  align-items: center;
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'row'};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? '0'};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ marginTop }) => marginTop ?? '0'};
  max-width: 100%;

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
