import { datalayerInteractionEventProps } from './types';

export const datalayerInteractionEvent = ({
  fn,
  data,
}: datalayerInteractionEventProps): void => {
  fn.push({
    event: 'interaction',
    eventCategory: 'social:me',
    eventAction: `clicou:${data.name}`,
    eventLabel: data.url,
    eventValue: 0,
  });
};
