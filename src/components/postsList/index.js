import React, { Fragment } from "react";
import { Link } from "gatsby";

import * as S from './styles';

const PostsList = ({ posts }) => {

  return (
    <Fragment>
      {posts.map(({ node }) => (
        <Link to={node.fields.slug}>
          <S.Card key={node.fields.slug}>
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
          </S.Card>
        </Link>
      ))}
    </Fragment>
  );
};

export default PostsList;