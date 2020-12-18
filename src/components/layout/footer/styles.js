import styled, { css } from 'styled-components/macro';
import { Container } from 'styles';
import theme from 'src/styles/Themes';

const { md } = theme.main.medias;

const footerWrapper = styled.footer`
  background: ${ theme.main.colors.darkestgrey };
  font-family: 'Inter', sans-serif;
  margin-top: 4rem;
  padding: 4rem 0;
  width: 100%;
`;

const footerContainer = styled(Container)`
  flex-direction: column;
`;

const row = styled.div`
  color: ${ theme.main.colors.white };
  display: flex;
  flex-direction: column;
  @media ${md} {
    flex-direction: row;
  }
  width: 100%;
`;

const firstRow = styled(row)`
`;

const secondRow = styled(row)`
  margin-top: 4rem;
`;

const column = styled.div`
  padding: 2rem;
  width: 100%;

  @media ${md} {
    padding: 0;
    width: 50%;
  }
`;

const presentationColumn = styled(column)`
  padding-right: 2rem;
`;

const infosColumn = styled(column)`
  padding-left: 2rem;
`;

const copyrightColumn = styled(column)`
  padding-right: 2rem;

  a {
    color: ${ theme.main.colors.white }; 
    font-weight: ${ theme.main.fonts.weight.bold };
    text-decoration: none;
  }
`;

const socialColumn = styled(column)`
  padding-left: 2rem;
`;

const presentationTitle = styled.strong`
  display: block;
  font-family: 'Ubuntu', sans-serif;
  font-size: 3rem;
  font-weight: ${ theme.main.fonts.weight.bolder };
  line-height: 1.4em;
`;
const presentationSubtitle = styled.strong`
  color: ${ theme.main.colors.white };
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  margin-top: .75rem;
`;

const infosLabel = styled.span`
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: .9rem;
  margin: ${({ margin }) => margin ? margin : '.5rem 0'};
`;

const infosHighlight = () => css`
  color: inherit;
  display: inline-block;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.25rem;
  font-weight: ${ theme.main.fonts.weight.bolder };
`;

const infosEmail = styled.strong`
  ${infosHighlight}
`;

const infosLink = styled.a`
  ${infosHighlight}
  text-decoration: none;
`

const emojiWrapper = styled.span`
  color: ${ theme.main.colors.red };
`;

export {
  emojiWrapper,
  footerContainer,
  footerWrapper,
  firstRow,
  secondRow,
  presentationColumn,
  infosColumn,
  copyrightColumn,
  socialColumn,
  presentationTitle,
  presentationSubtitle,
  infosLabel,
  infosEmail,
  infosLink,
}