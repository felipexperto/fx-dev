export type DataLayerEventName =
  | 'interaction'
  | 'virtualPageView'
  | 'click'
  | 'pageview';

export type DatalayerEventProps = {
  event: DataLayerEventName;
  eventAction: string;
  eventCategory: string;
  eventLabel?: string;
  eventValue?: number;
  nonInteraction?: boolean;
};

export type DatalayerWindow = {
  push: (event: DatalayerEventProps) => void;
}