import { IRadioButtonListItem } from '../../../components';

export enum RadioButtonTypes {
  yes = 'yes',
  no = 'no',
}

export const RADIO_BUTTON_LIST: ReadonlyArray<IRadioButtonListItem> = [
  {
    id: RadioButtonTypes.yes,
    title: 'Yes',
  },
  {
    id: RadioButtonTypes.no,
    title: 'No',
  },
];
