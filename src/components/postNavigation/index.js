import React from "react";
import { Link } from "gatsby";

import * as S from "./styles";

const isItemNull = (item) => item && item !== null ? false : true;
const navigationAlignmentRight = (arr) => (isItemNull(arr[0]) && !isItemNull(arr[1]));

const PostNavigation = ({previous, next}) => {

  return (
    <S.wrapperNavigation>
      <S.listNavigation
        alignmentRight={navigationAlignmentRight([previous, next])}
      >
        {previous && (
          <S.itemNavigationLeft>
            <Link to={previous.fields.slug} rel="anterior">
              <S.linkIcon>
              <i class='bx bx-left-arrow-alt'></i>
              </S.linkIcon>
              <S.linkPreTitle>Post anterior</S.linkPreTitle>
              <S.linkTitle>{previous.frontmatter.title}</S.linkTitle>
            </Link>
          </S.itemNavigationLeft>
        )}
        {next && (
          <S.itemNavigationRight>
            <Link to={next.fields.slug} rel="próximo">
              <S.linkIcon>
                <i class='bx bx-right-arrow-alt'></i>
              </S.linkIcon>
              <S.linkPreTitle>Próximo post</S.linkPreTitle>
              <S.linkTitle>{next.frontmatter.title}</S.linkTitle>
            </Link>
          </S.itemNavigationRight>
        )}
      </S.listNavigation>
    </S.wrapperNavigation>
  )
}

export default PostNavigation;