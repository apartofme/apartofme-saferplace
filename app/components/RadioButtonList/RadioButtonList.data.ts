export interface IRadioButtonListItem {
  id: string;
  title: string;
  isActive: boolean;
}

export enum RadioButtonListType {
  Single = 'single',
  Plural = 'plural',
}
