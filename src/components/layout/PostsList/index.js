import React from 'react';
import { Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { array } from 'prop-types';

import * as S from './styles';

const PostsList = ({ posts }) => {
  const allPosts = posts.map(({ node }) => {
    return (
      <Link to={node.fields.slug} key={uuidv4()}>
        <S.CardHeader>
          {node.frontmatter.category ? (
            <S.CardCategory>{node.frontmatter.category}</S.CardCategory>
          ) : null}
          <S.CardTitle>
            {node.frontmatter.title || node.fields.slug}
          </S.CardTitle>
        </S.CardHeader>
        <S.CardFooter>
          <S.CardComplementaryInfosList>
            <S.CardDate>{node.frontmatter.date}</S.CardDate>
            <S.CardReadingTime>
              {Math.round(node.fields.readingTime.minutes)} min
            </S.CardReadingTime>
          </S.CardComplementaryInfosList>
        </S.CardFooter>
      </Link>
    );
  });

  return <S.CardList>{allPosts}</S.CardList>;
};

PostsList.propTypes = {
  posts: array.isRequired,
};

export default PostsList;
