/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import GetAuthorInfo from 'src/services/authors';
import Avatar from 'src/components/UI/Avatar';
import SocialList from "src/components/UI/SocialList";
import avatarFelipe from 'src/images/authors/felipemarciano.png';
import avatarDaniele from 'src/images/authors/danielegama.jpg';
import * as S from './styles';

const Bio = ({ authorId }) => {

  const { authorBio, authorName, authorIntro, authorSocial } = GetAuthorInfo(authorId);
  const authorAvatar = authorId === 1 ? avatarFelipe : avatarDaniele;
  
  return (
    <S.BioWrapper>
      <Avatar
        image={authorAvatar}
        label={authorName}
      />
      <div>
        { (authorIntro) && <S.Intro>{ authorIntro }</S.Intro> }
        { (authorName) && <S.Name>{ authorName }</S.Name> }
        { (authorBio) && <S.Description>{ authorBio }</S.Description> }
        <SocialList networkArr={authorSocial} />
      </div>
    </S.BioWrapper>
  )
}

Bio.defaultProps = {
  authorId: 1,
}

Bio.propTypes = {
  authorId: PropTypes.number,
}

export default Bio;
