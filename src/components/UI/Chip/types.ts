import { ReactNode } from 'react';

export type ChipProps = {
  bgColor?: string;
  borderColor?: string;
  children: ReactNode;
  'data-testid': string;
};
