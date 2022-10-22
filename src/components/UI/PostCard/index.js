import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { string } from 'prop-types';
import { Chip } from 'components/UI';
import Career from 'images/postcard/icon-career.inline.svg';
import Design from 'images/postcard/icon-design.inline.svg';
import Dev from 'images/postcard/icon-dev.inline.svg';

import * as S from './styles';

const POSTCARD = {
  career: {
    bgColor: 'career',
    icon: <Career />,
  },
  design: {
    bgColor: 'design',
    icon: <Design />,
  },
  dev: {
    bgColor: 'dev',
    icon: <Dev />,
  },
};

const PostCard = ({ category, date, minutes, title, url }) => {
  const categoryName = category.toLowerCase();
  const chipBgColor = POSTCARD[categoryName].bgColor;
  const icon = POSTCARD[categoryName].icon;

  return (
    <S.Card to={url} key={uuidv4()}>
      <S.CardContent>
        <S.CardFirstColumn>{icon}</S.CardFirstColumn>
        <S.CardSecondColumn>
          <S.CardComplementaryInfosList>
            <S.CardDate>{date}</S.CardDate>
            <S.CardReadingTime>{minutes} min</S.CardReadingTime>
          </S.CardComplementaryInfosList>
          <S.CardTitle>{title}</S.CardTitle>
          <Chip bgColor={chipBgColor}>{category}</Chip>
        </S.CardSecondColumn>
      </S.CardContent>
    </S.Card>
  );
};

PostCard.propTypes = {
  category: string.isRequired,
  date: string.isRequired,
  minutes: string.isRequired,
  title: string.isRequired,
  url: string.isRequired,
};

export default PostCard;
