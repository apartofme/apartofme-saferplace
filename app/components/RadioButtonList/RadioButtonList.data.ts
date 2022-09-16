import { ImageSourcePropType } from 'react-native';

export interface IRadioButtonListItem {
  id: string;
  title: string;
  image?: ImageSourcePropType;
}

export enum RadioButtonListType {
  Single = 'single',
  Plural = 'plural',
}
