import styled from 'styled-components';

import theme from 'src/styles/Themes';

const Card = styled.article`

`;

const cardHeader = styled.header`

`;

const cardTitle = styled.h3`
  margin-bottom: .25em;

  > a {
    box-shadow: inset 0px -10px 0px 0 ${theme.main.colors.yellow};
    color: currentColor;
  }
`;

const cardDate = styled.small`
  color: ${ theme.main.colors.grey };
  font-family: Montserrat, sans-serif;
  line-height: 1.5em;
`;

const cardDescription = styled.section`

`;

const cardDescriptionText = styled.p`

`;

export {
  Card,
  cardHeader,
  cardTitle,
  cardDate,
  cardDescription,
  cardDescriptionText,
}