/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import { useAuthorInfo } from 'hooks';
import { Avatar } from 'components/UI';
import authorAvatar from 'images/authors/felipemarciano.png';
import * as S from './styles';

const Bio = ({ authorid = 1 }: { authorid: number }) => {
  const { authorBio, authorName, authorIntro } = useAuthorInfo(authorid);

  return (
    <S.BioWrapper>
      <Avatar
        data-testid="avatar-bio"
        image={authorAvatar}
        label={authorName}
      />
      <div>
        {authorIntro && <S.Intro>{authorIntro}</S.Intro>}
        {authorName && <S.Name>{authorName}</S.Name>}
        {authorBio && <S.Description>{authorBio}</S.Description>}
      </div>
    </S.BioWrapper>
  );
};

export default Bio;
