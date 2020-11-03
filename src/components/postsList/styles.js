import styled from 'styled-components/macro';

import theme from 'src/styles/Themes';

const { lg } = theme.main.medias;

const cardCategory = styled.span`
  background-color: ${theme.main.colors.darkyellow};
  border-radius: 100em;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  padding: .25em 1em;
  text-transform: uppercase;
`;

const cardList = styled.section`
  display: flex;
  flex-wrap: wrap;
  -webkit-font-smoothing: antialiased;

  & > a {
    align-items: stretch;
    background-color: ${ theme.main.colors.white };
    border-radius: 4px;
    box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08), 0 1px 3px 1px rgba(66, 66, 66, 0.16);
    color: ${ theme.main.colors.black };
    font-family: "Ubuntu", "Inter", Helvetica, Arial, sans-serif;
    margin: 2.5%;
    margin-bottom: 2rem;
    padding: 1.5rem;
    transform: scale(1.05);
    transition: all 235ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    width: 100%;

    @media ${lg} {
      width: 40%;
    }


    &:focus,
    &:hover {
      background-color: ${theme.main.colors.yellow};
      box-shadow: 0 1px 8px 5px rgba(66,66,66,0.08), 0 1px 3px 1px rgba(66,66,66,0.16);
      transform: scale(1.1);
    }
    &:focus ${cardCategory},
    &:hover ${cardCategory} {
      background-color: ${ theme.main.colors.white };
    }


  }
`;



const cardHeader = styled.header`

`;

const cardFooter = styled.header`
  margin-top: 1em;
`;

const cardTitle = styled.h3`
  font-weight: 700;
  margin-bottom: .25em;
  margin-top: .75em;

  > a {
    box-shadow: none;
  }
`;



const cardExtraInfo = styled.small`
  color: ${ theme.main.colors.grey };
`;

const cardDate = styled(cardExtraInfo)`
  color:  ${theme.main.colors.darkgrey};
  display: block;
  font-size: .8rem;
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
  cardFooter,
  cardCategory,
  cardTitle,
  cardDate,
  cardAuthor,
  cardDescription,
  cardDescriptionText,
}