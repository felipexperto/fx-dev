import { ReactNode } from 'react';

export type PostCategories = 'career' | 'design' | 'dev';

export type PostCardProps = {
  category: 'Carreira' | 'Design' | 'Dev';
  date: string;
  minutes: number;
  title: string;
  url: string;
};

export type PostCardCategory = {
  bgColor: 'career' | 'design' | 'dev';
  icon: ReactNode;
};

export type PostCardCategories = {
  [key: string]: PostCardCategory;
};
