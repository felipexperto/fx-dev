import React from "react";
import { Link } from "gatsby";
import { v4 as uuidv4 } from "uuid";
import * as S from './styles';

const PostsList = ({ posts }) => {

  return (
    <S.cardList>
      {posts.map(({ node }) => (
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
      ))}
    </S.cardList>
  );
};

export default PostsList;