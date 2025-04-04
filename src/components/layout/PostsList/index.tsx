import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as S from './styles';

const PostsList = ({ posts }: { posts: any }) => {
  return (
    <S.List as="ol" data-testid="posts-list">
      {posts.map(({ node }: { node: any }) => (
        <S.PostCard
          category={node.frontmatter.category}
          date={node.frontmatter.date}
          key={uuidv4()}
          minutes={Math.round(node.fields.readingTime.minutes)}
          title={node.frontmatter.title}
          url={node.fields.slug}
        />
      ))}
    </S.List>
  );
};

export default PostsList;
