import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';

export type ListProps = HTMLAttributes<HTMLUListElement | HTMLOListElement> & {
  as?: string;
  children: ReactNode;
  'data-testid': string;
  flexDirection?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'initial'
    | 'inherit';
};
