import styled from 'styled-components/macro';
import { Container } from 'styles';

const headerHeight = `72px`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.yellow};
  box-shadow: ${({ isScrolling }) => isScrolling ? '0 1px 10px -2px rgba(0,0,0,.75)': 'none'};
  display: flex;
  flex-direction: column;
  height: ${headerHeight};
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
justify-content: center;
  padding: 0 15px;
`;

const HeaderBottomSpace = styled.div`
  height: ${headerHeight};
  width: 100%;
`;

export {
  Header,
  HeaderBottomSpace,
  HeaderContainer,
  HeaderWrapper,
}