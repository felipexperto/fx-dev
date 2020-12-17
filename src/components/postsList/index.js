import React from "react";
import { Link } from "gatsby";
import { v4 as uuidv4 } from "uuid";

import CardListPlaceholderImage from 'src/images/estude-recrie-compartilhe-rasterizado.inline.svg';
import { useWindowSize } from 'src/hooks';
import { getNumberOfCardsFromScreenWidth } from "src/utils/helpers";
import { theme } from 'styles';
import * as S from './styles';

const CardListPlaceholder = () => (
  <div aria-label="Estude, Recrie e Compartilhe">
    <CardListPlaceholderImage data-cardlistplaceholderimage />
  </div>
);

const addCardListPlaceholders = (arr, numberOfPlaceholdersToAdd, JsxElement) => {
  for (let i = 0; i < numberOfPlaceholdersToAdd; i++) {
    arr.push(<JsxElement key={uuidv4()} />);
  }
}

const PostsList = ({ posts }) => {
  const { main } = theme;
  const { width } = useWindowSize();

  const cardsByRow = getNumberOfCardsFromScreenWidth(width, main.sizes);
  const allPosts = posts.map(({ node }) => (
    <Link to={node.fields.slug} key={uuidv4()}>
      <S.cardHeader>
        { node.frontmatter.category ? (
          <S.cardCategory>
            { node.frontmatter.category }
          </S.cardCategory>
        ) : null}
        <S.cardTitle>
          { node.frontmatter.title || node.fields.slug }
        </S.cardTitle>
      </S.cardHeader>
      <S.cardFooter>
        <S.cardDate>
          {node.frontmatter.date}
        </S.cardDate>
        {/* // @TODO Adicionar tempo de leitura do artigo */}
      </S.cardFooter>
    </Link>
  ));

  const allPostsLength = allPosts.length;
  const hasSingleItemByRow = cardsByRow === 1;
  const emptySpacesInLastRow = hasSingleItemByRow ? 1 : cardsByRow - (allPostsLength % cardsByRow);
  addCardListPlaceholders(allPosts, emptySpacesInLastRow, CardListPlaceholder);

  return (
    <S.cardList>
      {allPosts}
    </S.cardList>
  );
};

export default PostsList;