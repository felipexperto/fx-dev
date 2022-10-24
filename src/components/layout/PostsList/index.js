import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { array } from 'prop-types';
import * as S from './styles';

const PostsList = ({ posts }) => {
  return (
    <S.List as="ol" data-testid="posts-list">
      {posts.map(({ node }) => (
        <S.PostCard
          category={node.frontmatter.category}
          date={node.frontmatter.date}
          key={uuidv4}
          minutes={Math.round(node.fields.readingTime.minutes)}
          title={node.frontmatter.title}
          url={node.fields.slug}
        />
      ))}
    </S.List>
  );
};

PostsList.propTypes = {
  posts: array.isRequired,
};

export default PostsList;
