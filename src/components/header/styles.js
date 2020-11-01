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
  display: flex;
  flex-direction: column;
  height: ${headerHeight};
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};

  [data-logo] {
    width: 160px;
  }
`;

const HeaderContainer = styled(Container)`
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