import React from 'react';
import { Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import { string } from 'prop-types';

import * as S from './styles';

const PostCard = ({ category, date, minutes, title, url }) => {
  return (
    <Link to={url} key={uuidv4()}>
      <S.CardHeader>
        {category ? <S.CardCategory>{category}</S.CardCategory> : null}
        <S.CardTitle>{title}</S.CardTitle>
      </S.CardHeader>
      <S.CardFooter>
        <S.CardComplementaryInfosList>
          <S.CardDate>{date}</S.CardDate>
          <S.CardReadingTime>{minutes} min</S.CardReadingTime>
        </S.CardComplementaryInfosList>
      </S.CardFooter>
    </Link>
  );
};

PostCard.propTypes = {
  category: string,
  date: string.isRequired,
  minutes: string.isRequired,
  title: string.isRequired,
  url: string.isRequired,
};

PostCard.defaultProps = {
  category: '',
};

export default PostCard;
