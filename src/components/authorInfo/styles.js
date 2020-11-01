import styled from 'styled-components/macro';

import theme from 'src/styles/Themes';

const Description = styled.p`
  color: ${ theme.main.colors.grey };
  margin-bottom: 1rem;
  margin-top: .5rem;
`;
const Intro = styled.div`
  color: ${ theme.main.colors.grey };
  display: block;
  font-family: Montserrat, sans-serif;
  font-size: .85rem;
  text-transform: uppercase;
`;
const Name = styled.div`
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.25em;
`;


export {
  Description,
  Intro,
  Name,
};