import { DatalayerWindow, SocialNetwork } from 'types';

export type SocialListProps = {
  networkArr: SocialNetwork[];
  colorSchemeReverse: boolean;
};

export type datalayerInteractionEventProps = {
  fn: DatalayerWindow;
  data: SocialNetwork;
};
