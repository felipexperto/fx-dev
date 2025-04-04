import React from 'react';
import { Link } from 'gatsby';
import { BoxIcon } from 'components/UI';
import { isNull } from 'utils';
import * as S from './styles';

const navigationAlignmentRight = (arr: Array<Record<string, unknown>>) =>
  isNull(arr[0]) && !isNull(arr[1]);

const PostNavigation = ({ previous, next }: { previous: any; next: any }) => {
  return (
    <S.wrapperNavigation>
      <S.listNavigation
        alignmentRight={navigationAlignmentRight([previous, next])}
      >
        {previous && (
          <S.itemNavigationLeft>
            <Link to={previous.fields.slug} rel="anterior">
              <S.linkIcon>
                <BoxIcon className="bx-left-arrow-alt" />
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
                <BoxIcon className="bx-right-arrow-alt" />
              </S.linkIcon>
              <S.linkPreTitle>Próximo post</S.linkPreTitle>
              <S.linkTitle>{next.frontmatter.title}</S.linkTitle>
            </Link>
          </S.itemNavigationRight>
        )}
      </S.listNavigation>
    </S.wrapperNavigation>
  );
};

export default PostNavigation;
