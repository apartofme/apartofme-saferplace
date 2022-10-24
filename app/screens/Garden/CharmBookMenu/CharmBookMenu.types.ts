export interface ICharmBookMenuScreenProps {
  type: CharmBookMenuType;
  setModalStatus: () => void;
}

export enum CharmBookMenuType {
  NewCharm = 'NewCharm',
  NoneCharm = 'NoneCharm',
  InterruptedCharm = 'InterruptedCharm',
}
