import styled from 'styled-components/macro';

import theme from 'src/styles/Themes';

const { sm, xl } = theme.main.medias;

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
  justify-content: space-around;

  & > a {
    align-items: stretch;
    background-color: ${ theme.main.colors.white };
    border-radius: 4px;
    box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08), 0 1px 3px 1px rgba(66, 66, 66, 0.16);
    color: ${ theme.main.colors.black };
    font-family: "Ubuntu", "Inter", Helvetica, Arial, sans-serif;
    margin: 2% 8%;
    padding: 1.5rem;
    transition: all 235ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    max-width: 100%;
    width: 100%;

    @media ${sm} {
      margin: 8px;
      width: 46%;
    }

    @media ${xl} {
      width: 30%;
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