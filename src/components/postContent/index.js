import React, { Fragment } from "react";

import PostStyles from 'src/styles/PostStyles';
import Bio from "src/components/bio";
import * as S from './styles';

const PostContent = ({
  authorId,
  date,
  post,
  title,
  }) => {

  return (
    <Fragment>
      <PostStyles />
      <S.wrapperArticle>
        <S.header>
          <S.title>
            { title }
          </S.title>
        </S.header>
        <S.date>
          { date }
        </S.date>
        <S.content dangerouslySetInnerHTML={{ __html: post }} />
        <S.footer>
          <Bio authorId={authorId} />
        </S.footer>
      </S.wrapperArticle>
    </Fragment>
  )
}

export default PostContent;