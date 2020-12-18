import styled, { css } from 'styled-components/macro';
import { Container } from 'styles';
import { animationKeyframes } from 'src/styles';

const md = ({ theme }) => theme.medias.md;

const { fadeIn } = animationKeyframes;

const fadeInAnimation = () => css`
  -webkit-animation: ${fadeIn} 1s linear 1;
  -moz-animation: ${fadeIn} 1s linear 1;
  animation: ${fadeIn} 1s linear 1;
`;

const Banner = styled.section`
`;

const BannerWrapper = styled.div`
  background: ${({ theme }) => theme.colors.darkyellow};
  background: linear-gradient(0deg, rgba(244,218,18,1) 0%, rgba(244,188,18,1) 100%);
  color: ${({ theme }) => theme.colors.almostblack};
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
  flex-direction: column;
  font-family: 'Ubuntu', sans-serif;
  overflow: hidden;
  padding: 3rem 1rem;
  position: relative;
`;

const PreTitle = styled.div`
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: .5rem 0 .5rem 0;
`;

const Description = styled.p`
  line-height: 1.5em;
  margin-top: 0;
  max-width: 100%;
  width: 41ch;
`;

const BasicShape = styled.div`
  display: none;
  @media ${md} {
    display: block;
  }
  opacity: 10%;
  position: absolute;
`;

const Circle = styled(BasicShape)`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 100rem;
  height: 14rem;
  left: 25%;
  bottom: -10%;
  width: 14rem;
`;

const Triangle = styled(BasicShape)`
  border-color: transparent transparent ${({ theme }) => theme.colors.black} transparent;
  border-style: solid;
  border-width: 0 0 130px 180px;
  bottom: 55%;
  height: 0;
  left: 35%;
  transform: rotate(60deg);
  width: 0;
`;

const Square = styled(BasicShape)`
  background-color: ${({ theme }) => theme.colors.black};
  height: 8rem;
  left: 75%;
  transform: rotate(45deg);
  width: 8rem;
`;

export {
  Banner,
  BannerWrapper,
  BannerContainer,
  PreTitle,
  Title,
  Description,
  Circle,
  Triangle,
  Square,
}