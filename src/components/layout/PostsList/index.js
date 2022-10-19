import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { array } from 'prop-types';
import { List, PostCard } from 'components/UI';

const PostsList = ({ posts }) => {
  return (
    <List as="ol" data-testid="posts-list">
      {posts.map(({ node }) => (
        <PostCard
          category={node.frontmatter.category}
          date={node.frontmatter.date}
          key={uuidv4()}
          minutes={Math.round(node.fields.readingTime.minutes)}
          title={node.frontmatter.title}
          url={node.fields.slug}
        />
      ))}
    </List>
  );
};

PostsList.propTypes = {
  posts: array.isRequired,
};

export default PostsList;
