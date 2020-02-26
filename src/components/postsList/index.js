import React, { Fragment } from "react";
import { Link } from "gatsby";

import * as S from './styles';

const PostsList = ({ posts }) => {

  return (
    <Fragment>
      {posts.map(({ node }) => (
        <S.Card key={node.fields.slug}>
          <S.cardHeader>
            <S.cardTitle>
              <Link to={node.fields.slug}>
                { node.frontmatter.title || node.fields.slug }
              </Link>
            </S.cardTitle>
            <S.cardDate>
              {node.frontmatter.date}
            </S.cardDate>
          </S.cardHeader>
          <S.cardDescription>
            <S.cardDescriptionText
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </S.cardDescription>
        </S.Card>
      ))}
    </Fragment>
  );
};

export default PostsList;