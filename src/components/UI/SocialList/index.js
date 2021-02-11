import React, { useContext } from "react";
import { bool, array } from 'prop-types';
import { v4 as uuidv4 } from "uuid";

import { DatalayerContext } from 'src/contexts';
import * as S from './styles';

const SocialList = ({ networkArr, colorSchemeReverse }) => {
  const datalayerComponent = useContext(DatalayerContext);

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
              onClick={(e) => {
                e.preventDefault();
                datalayerComponent.push({
                  'event': 'interaction',
                  'eventCategory': 'social:me',
                  'eventAction': `clicou:${network.name}`,
                  'eventLabel': network.url,
                  'eventValue': 0,
                });
                window.location.href = network.url;
              }}
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

SocialList.defaultProps = {
  colorSchemeReverse: false,
};

SocialList.propTypes = {
  networkArr: array.isRequired,
  colorSchemeReverse: bool,
};

export default SocialList;
