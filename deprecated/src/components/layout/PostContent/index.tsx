import React, { Fragment } from 'react';
import { PostContentProps } from 'types';

import PostStyles from 'styles/PostStyles';
import { Bio } from 'components/layout';
import * as S from './styles';

const PostContent = ({
  authorid,
  date,
  post,
  title,
  tldr,
  update,
  timeToRead,
}: PostContentProps) => {
  return (
    <Fragment>
      <PostStyles />
      <S.wrapperArticle>
        <S.header>
          <S.title>{title}</S.title>
          <S.dates>
            {date && <S.date>Publicado em: {date}</S.date>}
            {update && <S.update>Atualizado em: {update}</S.update>}
            {timeToRead && (
              <S.timeToRead>Tempo de leitura: {timeToRead} min</S.timeToRead>
            )}
          </S.dates>
          {tldr && (
            <S.tldrWrapper>
              <S.tldrHeader>
                <S.tldrTitle>Não li, nem lerei</S.tldrTitle>
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
          <Bio authorid={authorid} />
        </S.footer>
      </S.wrapperArticle>
    </Fragment>
  );
};

export default PostContent;
