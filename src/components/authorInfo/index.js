import React from "react";

import SocialList from "src/components/socialList";
import * as S from './styles';

const getSocialNetworks = item => item.map((item) => item[1]).filter(shouldNetworkBeVisible);
const shouldNetworkBeVisible = item => item.show === true;

const AuthorInfo = ({ props }) => {
  
  const { name, intro, bio, social } = props;
  const socialArr = getSocialNetworks(Object.entries(social));

  return (
    <div>
      { (intro) && <S.Intro>{ intro }</S.Intro> }
      { (name) && <S.Name>{ name }</S.Name> }
      { (bio) && <S.Description>{ bio }</S.Description> }
      <SocialList networkArr={socialArr} />
    </div>
)};
export default AuthorInfo