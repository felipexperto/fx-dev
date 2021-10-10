import styled from 'styled-components/macro';
import { Container } from 'styles';
import { Title } from 'components/UI';

export const ContainerForFewContentPage = styled(Container)`
  align-items: middle;
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
`;

export const TitleInlineStyle = styled(Title)`
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 0;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-family: Inter, sans-serif;
  font-size: 18px;
  text-align: center;
`;

export const Anchor = styled.a`
  font-family: Inter, sans-serif;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
`;