import { ReactNode } from "react";

export type ListProps = {
  as?: string;
  children: ReactNode;
  'data-testid': string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
}
