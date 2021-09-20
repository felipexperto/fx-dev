import React from 'react';
import { Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { array } from 'prop-types';

import * as S from './styles';

const isWipPost = (postSlug) => postSlug.includes('wip-');

const PostsList = ({ posts }) => {
  const allPosts = posts.map(({ node }) => {
    if (isWipPost(node.fields.slug)) return;

    return (
      <Link to={node.fields.slug} key={uuidv4()}>
        <S.cardHeader>
          {node.frontmatter.category ? (
            <S.cardCategory>{node.frontmatter.category}</S.cardCategory>
          ) : null}
          <S.cardTitle>
            {node.frontmatter.title || node.fields.slug}
          </S.cardTitle>
        </S.cardHeader>
        <S.cardFooter>
          <S.cardComplementaryInfosList>
            <S.cardDate>{node.frontmatter.date}</S.cardDate>
            <S.cardReadingTime>
              {Math.round(node.fields.readingTime.minutes)} min
            </S.cardReadingTime>
          </S.cardComplementaryInfosList>
        </S.cardFooter>
      </Link>
    );
  });

  return <S.cardList>{allPosts}</S.cardList>;
};

PostsList.propTypes = {
  posts: array.isRequired,
};

export default PostsList;
