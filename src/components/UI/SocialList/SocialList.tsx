import React, { useContext } from 'react';
import { bool, array } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { BoxIcon } from 'components/UI';
import { DatalayerContext } from 'contexts';
import { datalayerInteractionEvent } from './helpers';
import { SocialListProps } from './types';
import * as S from './styles';

const SocialList = ({ networkArr, colorSchemeReverse }: SocialListProps) => {
  const datalayerComponent = useContext(DatalayerContext);

  return (
    <S.SocialList>
      {networkArr.map((network) => (
        <S.SocialItem key={uuidv4()}>
          <S.SocialAnchor
            colorSchemeReverse={colorSchemeReverse}
            href={network.url}
            rel="noopener noreferrer"
            title={network.name}
            target="_blank"
            onClick={(e) => {
              e.preventDefault();
              datalayerInteractionEvent({
                fn: datalayerComponent,
                data: network,
              });
              window.location.href = network.url;
            }}
          >
            {network.boxicon_type ? (
              <BoxIcon
                name={network.boxicon}
                className={`${network.boxicon_type}-${network.boxicon}`}
              />
            ) : (
              <BoxIcon
                name={network.boxicon}
                className={`bxl-${network.boxicon}`}
              />
            )}
          </S.SocialAnchor>
        </S.SocialItem>
      ))}
    </S.SocialList>
  );
};

SocialList.defaultProps = {
  colorSchemeReverse: false,
};

SocialList.propTypes = {
  networkArr: array.isRequired,
  colorSchemeReverse: bool,
};

export default SocialList;
