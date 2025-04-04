import React from 'react';
import Baseball from 'images/banner/astronaut-baseball.inline.svg';
import Bicycle from 'images/banner/astronaut-bicycle.inline.svg';
import Laptop from 'images/banner/astronaut-laptop.inline.svg';
import Lying from 'images/banner/astronaut-lying.inline.svg';
import Peace from 'images/banner/astronaut-peace.inline.svg';
import Pool from 'images/banner/astronaut-pool.inline.svg';
import Rocket from 'images/banner/astronaut-rocket.inline.svg';

import * as S from './styles';

const ILLUSTRATION_BANNER = [
  <Baseball key="banner-baseball" />,
  <Bicycle key="banner-bicycle" />,
  <Laptop key="banner-laptop" />,
  <Lying key="banner-lying" />,
  <Peace key="banner-peace" />,
  <Pool key="banner-pool" />,
  <Rocket key="banner-rocket" />,
];

const illustrationLength = ILLUSTRATION_BANNER.length;

const BannerIllustration = () => {
  const position = Math.floor(Math.random() * illustrationLength);
  const illustration = ILLUSTRATION_BANNER.at(position);

  return (
    <S.IllustrationWrapper data-testid="banner-wrapper">
      {illustration}
    </S.IllustrationWrapper>
  );
};

export default BannerIllustration;
