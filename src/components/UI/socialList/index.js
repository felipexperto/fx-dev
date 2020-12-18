import React from "react";
import { v4 as uuidv4 } from "uuid";

import * as S from './styles';

const SocialList = ({ networkArr, colorSchemeReverse }) => {
  
  return (
    <S.SocialList>
    {
      networkArr.map((network) => (
        <S.SocialItem key={uuidv4()}>
          <S.SocialAnchor 
            colorSchemeReverse={colorSchemeReverse}
            href={network.url}
            rel="noopener noreferrer"
            title={network.name}
            target="_blank"
            >
              { (network.boxicon_type) ?
                <i
                  name={network.boxicon}
                  className={`bx ${network.boxicon_type}-${network.boxicon}`}
                ></i>
                :
                <i
                  name={network.boxicon}
                  className={`bx bxl-${network.boxicon}`}
                ></i>
              }
            </S.SocialAnchor>
        </S.SocialItem>
      ))
    }
    </S.SocialList>
  )
};
export default SocialList;
