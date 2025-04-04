import React from 'react';
import { PostCardCategories } from './types';
import Career from 'images/postcard/icon-career.inline.svg';
import Design from 'images/postcard/icon-design.inline.svg';
import Dev from 'images/postcard/icon-dev.inline.svg';

export const POSTCARD_CATEGORIES: PostCardCategories = {
  carreira: {
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
