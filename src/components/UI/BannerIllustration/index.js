/* eslint-disable react/jsx-key */
import React from 'react';
import Baseball from 'images/banner/astronaut-baseball.inline.svg';
import Bicycle from 'images/banner/astronaut-bicycle.inline.svg';
import Laptop from 'images/banner/astronaut-laptop.inline.svg';
import Lying from 'images/banner/astronaut-lying.inline.svg';
import Peace from 'images/banner/astronaut-peace.inline.svg';
import Pool from 'images/banner/astronaut-pool.inline.svg';
import Rocket from 'images/banner/astronaut-rocket.inline.svg';

import * as S from './styles.js';

const ILLUSTRATION_BANNER = [
  <Baseball />,
  <Bicycle />,
  <Laptop />,
  <Lying />,
  <Peace />,
  <Pool />,
  <Rocket />,
];

const illustrationLength = ILLUSTRATION_BANNER.length;

const BannerIllustration = () => {
  const position = Math.floor(Math.random() * illustrationLength);
  const illustration = ILLUSTRATION_BANNER.at(position);

  return <S.IllustrationWrapper>{illustration}</S.IllustrationWrapper>;
};

export default BannerIllustration;
