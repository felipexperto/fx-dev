import React from "react";
import uuid from "uuid";

import theme from 'src/styles/Themes';
import * as S from './styles';

const SocialList = ({ networkArr }) => {
  
  return (
    <S.SocialList>
    {
      networkArr.map((network) => (
        <S.SocialItem key={uuid.v4()}>
          <S.SocialAnchor 
            href={network.url}
            title={network.name}
            target="_blank"
            rel="noopener noreferrer"
            >
              { (network.boxicon_type) ?
                <box-icon name={network.boxicon} color={theme.main.colors.darkgrey} type={network.boxicon_type}></box-icon>
                :
                <box-icon name={network.boxicon} color={theme.main.colors.darkgrey} type='logo'></box-icon>
              }
            </S.SocialAnchor>
        </S.SocialItem>
      ))
    }
    </S.SocialList>
  )
};
export default SocialList;
