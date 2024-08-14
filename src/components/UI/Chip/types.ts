import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';

export type ChipProps = HTMLAttributes<HTMLDivElement> & {
  bgColor?: string;
  borderColor?: string;
  children: ReactNode;
  'data-testid': string;
};
