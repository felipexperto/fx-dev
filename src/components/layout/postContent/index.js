import React, { Fragment } from "react";

import PostStyles from 'src/styles/PostStyles';
import Bio from "src/components/layout/Bio";
import * as S from './styles';

const PostContent = ({
  authorId,
  date,
  description,
  post,
  title,
  tldr,
  update,
  timeToRead,
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
            {(timeToRead) && (
              <S.timeToRead>
                Tempo de leitura: { timeToRead } min
              </S.timeToRead>
            )}
          </S.dates>
          {(tldr) && (
            <S.tldrWrapper>
              <S.tldrHeader>
                <S.tldrTitle>
                  Não li, nem lerei
                </S.tldrTitle>
                <S.tldrSubtitle>
                  Um breve resumo para pessoas cansadas
                </S.tldrSubtitle>
              </S.tldrHeader>
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