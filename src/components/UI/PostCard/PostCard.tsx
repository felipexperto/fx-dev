import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Chip } from 'components/UI';
import { POSTCARD_CATEGORIES } from './constants';
import { PostCardProps } from './types';

import * as S from './styles';

const PostCard = ({ category, date, minutes, title, url }: PostCardProps) => {
  const categoryName = category.toLowerCase();
  const chipBgColor = POSTCARD_CATEGORIES[categoryName].bgColor;
  const dataTestId = url.replaceAll('/', '');
  const icon = POSTCARD_CATEGORIES[categoryName].icon;

  return (
    <S.Card data-testid={dataTestId}>
      <S.CardAnchor to={url} key={uuidv4()}>
        <S.CardContent>
          <S.CardFirstColumn>{icon}</S.CardFirstColumn>
          <S.CardSecondColumn>
            <S.CardComplementaryInfosList>
              <S.CardDate>{date}</S.CardDate>
              <S.CardReadingTime>{minutes} min</S.CardReadingTime>
            </S.CardComplementaryInfosList>
            <S.CardTitle>{title}</S.CardTitle>
            <Chip
              bgColor={chipBgColor}
              data-testid={`chip-${categoryName}-${dataTestId}`}
            >
              {category}
            </Chip>
          </S.CardSecondColumn>
        </S.CardContent>
      </S.CardAnchor>
    </S.Card>
  );
};

export default PostCard;
