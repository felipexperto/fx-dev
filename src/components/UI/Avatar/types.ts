import { HTMLAttributes } from 'react';

export type AvatarProps = HTMLAttributes<HTMLImageElement> & {
  'data-testid': string;
  image: string;
  label: string;
};
