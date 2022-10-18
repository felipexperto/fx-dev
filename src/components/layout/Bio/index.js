/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { useAuthorInfo } from 'hooks';
import { Avatar } from 'components/UI';
import authorAvatar from 'images/authors/felipemarciano.png';
import * as S from './styles';

const Bio = ({ authorId }) => {
  const { authorBio, authorName, authorIntro } = useAuthorInfo(authorId);

  return (
    <S.BioWrapper>
      <Avatar image={authorAvatar} label={authorName} />
      <div>
        {authorIntro && <S.Intro>{authorIntro}</S.Intro>}
        {authorName && <S.Name>{authorName}</S.Name>}
        {authorBio && <S.Description>{authorBio}</S.Description>}
      </div>
    </S.BioWrapper>
  );
};

Bio.defaultProps = {
  authorId: 1,
};

Bio.propTypes = {
  authorId: PropTypes.number,
};

export default Bio;
