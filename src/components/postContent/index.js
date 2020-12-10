import React, { Fragment } from "react";

import PostStyles from 'src/styles/PostStyles';
import Bio from "src/components/bio";
import * as S from './styles';

const PostContent = ({
  authorId,
  date,
  description,
  post,
  title,
  tldr,
  update,
  }) => {

  return (
    <Fragment>
      <PostStyles />
      <S.wrapperArticle>
        <S.header>
          <S.title>
            { title }
          </S.title>
          <S.dates>
            {(date) && (
              <S.date>
                Publicado em: { date }
              </S.date>
            )}
            {(update) && (
              <S.update>
                Atualizado em: { update }
              </S.update>
            )}
          </S.dates>
          {(tldr) && (
            <S.tldrWrapper>
              <S.tldrTitle>
                Não li, nem lerei
              </S.tldrTitle>
              <S.tldrText dangerouslySetInnerHTML={{ __html: tldr }} />
            </S.tldrWrapper>
          )}
        </S.header>
        <S.content dangerouslySetInnerHTML={{ __html: post }} />
        <S.footer>
          <Bio authorId={authorId} />
        </S.footer>
      </S.wrapperArticle>
    </Fragment>
  )
}

export default PostContent;