import styled from 'styled-components/macro';
import { Container } from 'styles';
import { Tipography } from 'components/UI';

export const ContainerForFewContentPage = styled(Container)`
  align-items: middle;
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
`;

export const TitleInlineStyle = styled(Tipography)`
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 0;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
`;

export const Anchor = styled.a`
  font-size: 18px;
  text-align: center;
  text-decoration: none;
`;
