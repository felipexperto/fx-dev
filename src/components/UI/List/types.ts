import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import { FlexDirection } from 'types/CssTypes';

export type ListProps = HTMLAttributes<HTMLUListElement | HTMLOListElement> & {
  as?: string;
  children: ReactNode;
  'data-testid': string;
  flexDirection?: FlexDirection;
};
