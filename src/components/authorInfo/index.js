import React from "react";
import uuid from "uuid";

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
      <S.SocialList>
        {
          socialArr.map((network) => (
            <S.SocialItem key={uuid.v4()}>
              <a 
                href={network.url}
                title={network.name}
                target="_blank"
                rel="noopener noreferrer"
                >
                  {network.name}
                </a>
            </S.SocialItem>
          ))
        }
      </S.SocialList>
    </div>
)};
export default AuthorInfo