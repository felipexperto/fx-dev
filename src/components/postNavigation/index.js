import React from "react";
import { Link } from "gatsby";

import * as S from "./styles";

const PostNavigation = ({previous, next}) => {

  return (
    <S.wrapperNavigation>
      <S.listNavigation>
        {previous && (
          <S.itemNavigationLeft>
            <Link to={previous.fields.slug} rel="prev">
              <S.linkPreTitle>← Post anterior</S.linkPreTitle>
              <S.linkTitle>{previous.frontmatter.title}</S.linkTitle>
            </Link>
          </S.itemNavigationLeft>
        )}
        {next && (
          <S.itemNavigationRight>
            <Link to={next.fields.slug} rel="next">
              <S.linkPreTitle>Próximo post →</S.linkPreTitle>
              <S.linkTitle>{next.frontmatter.title}</S.linkTitle>
            </Link>
          </S.itemNavigationRight>
        )}
      </S.listNavigation>
    </S.wrapperNavigation>
  )
}

export default PostNavigation;