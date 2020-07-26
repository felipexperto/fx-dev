import styled from 'styled-components';

import theme from 'src/styles/Themes';
import { rhythm } from "src/utils/typography";

export { default as Header } from '../header';
export { default as Footer } from '../footer';

const wrapperFull = styled.div`
  background-color: ${ theme.main.colors.lightestgrey };
`;

const wrapperLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

const wrapperContent = styled.main`
`;

export {
  wrapperFull,
  wrapperContent,
  wrapperLayout,
}