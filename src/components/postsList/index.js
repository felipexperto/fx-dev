import React from "react";
import { Link } from "gatsby";

import * as S from './styles';

const PostsList = ({ posts }) => {

  return (
    <S.cardList>
      {posts.map(({ node }) => (
        <Link to={node.fields.slug} key={node.fields.slug}>
          <S.cardHeader>
            <S.cardDate>
              {node.frontmatter.date}
            </S.cardDate>
            <S.cardTitle>
                { node.frontmatter.title || node.fields.slug }
            </S.cardTitle>
          </S.cardHeader>
          <S.cardDescription>
            <S.cardDescriptionText
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </S.cardDescription>
        </Link>
      ))}
    </S.cardList>
  );
};

export default PostsList;