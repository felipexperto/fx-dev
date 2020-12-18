import styled, { css } from 'styled-components/macro';
import { Container } from 'styles';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  background-color: ${({ isBackgroundTransparent, theme }) => isBackgroundTransparent ? theme.colors.transparent : theme.colors.darkyellow };
  box-shadow: ${({ isScrolling }) => isScrolling ? '0 1px 10px -2px rgba(0,0,0,.75)': 'none'};
  display: flex;
  flex-direction: column;
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: all .25s ease-in;
  z-index: ${({ theme }) => theme.zIndex.header};

  [data-logo] {
    height: 100%;
    width: 160px;
  }
`;

const HeaderContainer = styled(Container)`
  padding: 0 15px;
`;

const HeaderBottomSpace = styled.div`
  ${({ height }) =>
  height &&
  css`
    height: ${height};
  `};
  width: 100%;
`;

export {
  Header,
  HeaderContainer,
  HeaderBottomSpace,
  HeaderWrapper,
}