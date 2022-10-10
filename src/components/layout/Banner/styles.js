import styled, { css } from 'styled-components/macro';
import { Container } from 'styles';
import { animationKeyframes } from 'styles';

const { fadeIn } = animationKeyframes;

const md = ({ theme }) => theme.medias.md;

const fadeInAnimation = () => css`
  -webkit-animation: ${fadeIn} 1s linear 1;
  -moz-animation: ${fadeIn} 1s linear 1;
  animation: ${fadeIn} 1s linear 1;
`;

const Banner = styled.section``;

const BannerWrapper = styled.div`
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ paddingTop }) =>
    paddingTop &&
    css`
      padding-top: ${paddingTop};
    `};
  width: 100%;
`;

const BannerContainer = styled(Container)`
  ${fadeInAnimation}
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  font-family: 'Ubuntu', sans-serif;
  justify-content: space-between;
  overflow: hidden;
  padding: 3rem 1rem;
  position: relative;
`;

const FirstColumn = styled.div`
  flex-direction: column;
`;

const SecondColumn = styled.div`
  display: none;
  flex-direction: column;

  @media ${md} {
    display: block;
  }
`;

const PreTitle = styled.div``;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0.5rem 0 0.5rem 0;
`;

const Description = styled.p`
  line-height: 1.5em;
  margin-top: 0;
  max-width: 100%;
  width: 41ch;
`;

export {
  Banner,
  BannerWrapper,
  BannerContainer,
  FirstColumn,
  SecondColumn,
  PreTitle,
  Title,
  Description,
};
