import styled from 'styled-components';

import theme from 'src/styles/Themes';

const { lg } = theme.main.medias;

const cardList = styled.section`
  display: flex;
  flex-wrap: wrap;

  & > a {
    align-items: stretch;
    margin: 2.5%;
    width: 100%;

    @media ${lg} {
      width: 40%;
    }

    background-color: ${ theme.main.colors.white };
    border-radius: 4px;
    box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08), 0 1px 3px 1px rgba(66, 66, 66, 0.16);
    color: ${ theme.main.colors.black };
    margin-bottom: 2rem;
    padding: 1.5rem;
    transform: scale(1.05);
    transition: all 235ms 0ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus,
    &:hover {
      background-color: ${theme.main.colors.yellow};
      box-shadow: 0 1px 8px 5px rgba(66,66,66,0.08), 0 1px 3px 1px rgba(66,66,66,0.16);
      transform: scale(1.1);
    }
  }
`;



const cardHeader = styled.header`

`;

const cardTitle = styled.h3`
  font-style: italic;
  margin-bottom: .25em;
  margin-top: 0;

  > a {
    box-shadow: none;
  }
`;

const cardExtraInfo = styled.small`
  color: ${ theme.main.colors.grey };
  font-family: Montserrat, sans-serif;
`;

const cardDate = styled(cardExtraInfo)`
  display: block;
  font-size: .7rem;
  letter-spacing: 0.05em;
  margin-bottom: .5rem;
`;

const cardAuthor = styled(cardExtraInfo)`
  margin-left: 1rem;
`;

const cardDescription = styled.section`
  margin-top: .75rem;
`;

const cardDescriptionText = styled.p`
  font-size: .85rem;
  margin-bottom: 0;
`;

export {
  cardList,
  cardHeader,
  cardTitle,
  cardDate,
  cardAuthor,
  cardDescription,
  cardDescriptionText,
}